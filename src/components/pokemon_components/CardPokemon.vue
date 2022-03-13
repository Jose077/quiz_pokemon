<template>
  <q-card class="bordered" style="border-radius: 2rem;">
    <div
      :style="`
        display: flex;
        justify-content: center;
        background: radial-gradient(white 0%, ${colorsTypes[pokemonData?.types[0].type?.name]} 100%)`"
    >
      <img style="width: 12rem" :src="pokemonData?.sprites?.front_default" />
    </div>

    <!-- nome do pokemon -->
    <q-list class="q-pb-md q-mt-sm">
      <span class="q-ml-md text-h5 q-pb-xs">
        {{ title || "Não encontrado!" }}
      </span>

      <!-- <q-item clickable>
        <q-item-section avatar>
          <q-icon color="primary" name="local_bar" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Bar XYZ</q-item-label>
          <q-item-label caption>Have a drink.</q-item-label>
        </q-item-section>
      </q-item> -->
    </q-list>

    <!-- tipos -->
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

    <!-- info -->
    <q-item class="q-px-md view_info_props" clickable>
      <span style="font-size: 0.9rem; font-weight: bold"> Ver informações</span>
      <q-icon name="mdi-pokeball" size="1.5rem" class="q-ml-xs" />
    </q-item>
  </q-card>
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
          psychic: '#Fyhh95587',
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
