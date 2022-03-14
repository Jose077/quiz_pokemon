<template>
  <q-card class="bordered" style="border-radius: 1.4rem;">
    <!-- Imagem pokemon-->
    <div
      :style="`
        display: flex;
        justify-content: center;
        background: radial-gradient(white 0%, ${colorsTypes[pokemonData?.types[0].type?.name]} 100%)`"
    >
      <q-img style="width: 12rem" :src="pokemonData?.sprites?.front_default" :alt="title" />
    </div>

    <!-- Nome do pokemon -->
    <q-list class="q-pb-md q-mt-sm">
      <span class="q-ml-md text-h5 q-pb-xs">
        {{ title || "Não encontrado!" }}
      </span>
    </q-list>

    <!-- Tipos -->
    <q-chip
      v-for="type in pokemonData?.types"
      :key="type.url"
      :style="`
        border-radius: 100px;
        margin-bottom: 1rem;
        background: ${colorsTypes[type?.type?.name]}
      `"
    >
      <span style="font-weight: bold; color: white"> {{ type?.type?.name }} </span>
    </q-chip>

    <!-- Info -->
    <q-item class="q-px-md view_info_props" clickable @click="modalControl = true">
      <span style="font-size: 0.9rem; font-weight: bold"> Ver informações</span>
      <q-icon name="mdi-pokeball" size="1.5rem" class="q-ml-xs" />
    </q-item>

  </q-card>

  <!-- Modal pokemon info -->
  <q-dialog v-model="modalControl" style="background-color: rgba(0,0,0,0.8);" >
    <q-card rouded style="width: 900px; max-width: 80vw; border-radius: 1.5rem" >
      <!-- Tipos/imagem -->
      <div
        :style="`
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(to right, white 0%, ${colorsTypes[pokemonData?.types[0].type?.name]} 100%)
        `"
      >

          <!-- types -->
          <q-btn 
            flat 
            round 
            icon="mdi-close"
            style="position: absolute; top: 0.5rem; right: 0.5rem; cursor: pointer; z-index: 99"
            @click="modalControl = false"

          />

          <div style="display: flex; flex-direction: column; padding: 1.5rem">
            <q-chip
                  v-for="type in pokemonData?.types"
                  :key="type.url"
                  :style="`
                    border-radius: 100px;
                    background: ${colorsTypes[type?.type?.name]}
                  `"
                >
              <span style="font-weight: bold; color: white"> {{ type?.type?.name }} </span>
            </q-chip>
          </div>

          <q-space />

          <q-img
            :alt="title"
            :src="pokemonData?.sprites?.front_default"
            style="max-width: 12rem"
          />

      </div>

      <q-card-section>
        <!-- name/w/h -->
        <div style="display: flex">
            <span class="col text-h5"> {{title}} </span>

            <q-space/>

            <div class="q-mr-md">
             <q-icon name="mdi-human-male-height" size="1.2rem" />  <span class="q-mr-md">: {{(pokemonData.height / 10)}}m </span>
             <q-icon name="mdi-scale" size="1rem" /> <span>: {{(pokemonData.weight / 10)}}Kg </span>
            </div>

        </div>

        <hr class="q-my-md" style="height: 0.09rem; background: gray">

        <!-- posps -->
        <div
          v-for="stat in pokemonData.stats" :key="stat"
          style="
            display: flex; 
            gap: 0.5rem; 
            align-items: center; 
            width: 100%;
            padding: 0.3rem
          "
          class="row"
        >
            <div class="col-12 col-md-1">
                <span>{{ returnNameStat(stat.stat.name)}} </span> 
            </div>

            <div class="col-12 col-md-9">
                <q-linear-progress
                  :style="`color: ${colorsTypes[pokemonData?.types[0].type?.name]}`"
                  rounded size="8px" 
                  :value="(stat.base_stat / 100)"
                /> 
            </div>

            <div class="col-12 col-md-1">
                <span>{{stat.base_stat}}</span>
            </div>
        </div>

      </q-card-section>

    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "CardPokemon",

  setup() {
    const $store = useStore();

    let pokemonData = ref(null);

    const colorsTypes = ref(null)

    return {
      pokemonData,
      $store,
      modalControl: ref(false),
      colorsTypes: {
          normal: '#A8A77A',
          fire: '#EE8130',
          water: '#6390F0',
          electric: '#F7D02C',
          grass: '#7AC74C',
          ice: '#96D9D6',
          fighting: '#C22E28',
          poison: '#A33EA1',
          ground: '#E2BF65',
          flying: '#A98FF3',
          psychic: '#F95587',
          bug: '#A6B91A',
          rock: '#B6A136',
          ghost: '#735797',
          dragon: '#6F35FC',
          dark: '#705746',
          steel: '#B7B7CE',
          fairy: '#D685AD',
      }
    };
  },

  props: {
    title: {
      type: String,
      required: true,
    },

    link: {
      type: String,
      default: "#",
      required: true,
    },
  },

  methods: {

    getPokemonByName(name) {
      this.$store
        .dispatch("pokemon/getPokemonByName", name)
        .then((res) => {
          this.pokemonData = res.data ?? [];
        })
        .catch((err) => {
          console.log(err);
        });
    },

    returnNameStat(name) {

      // se o nome for composto
      if(name.includes("-")) {
        let names = name.split("-");

        let shortName = names.map((name) => {
          return name.substr(0,2)
        })

        return shortName.join("-")
      }

      return name;
    }
  },

  created() {
    this.getPokemonByName(this.title);
  },
});
</script>

<style lang="scss">

.view_info_props {
  display: flex;
  justify-content: center;
  background: $blue_400;
  color: white;
  align-items: center;
}
</style>
