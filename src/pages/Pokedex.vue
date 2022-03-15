<template>
  <q-page class="content--default">

    <div style="width: 72vw; ">

      <!-- lista de pokedex -->
      <div class="row q-mt-md">
        <!-- filtro por nome-->
        <!-- <span class="q-ml-md text-h6">Buscar por nome</span> -->
        <q-space></q-space>

        <q-input
          style="
            width: 50%;
            margin: 1rem 1rem;
          "
          color="blue-grey-6"
          bg-color="blue-grey-3"
          filled
          label="Digite o nome do pokemon!"
          v-model="text"
          stack-labe
          dense
          clearable

        >
          <template v-slot:append>
            <q-icon name="search" size="1.8rem" />
          </template>
        </q-input>

        <!-- Lista infinita de pokemons -->
        <q-infinite-scroll @load="onLoad" :offset="250" class="row" >
          <div
            class="col-12 col-lg-3 col-md-3 col-sm-6 q-pa-md"
            v-for="(pokemon, index) in pokemonList"
            :key="index"
          >
              <div>
                  <CardPokemon :title="pokemon?.name" :link="pokemon?.url" />
              </div>
          </div>

          <!-- loading -->
          <template v-slot:loading>
            <div style="width: 72vw; display: flex; justify-content: center;" >
              <q-spacer/>
              <q-spinner-dots style="color: #0A2C59" size="70px" />
            </div>
          </template>

        </q-infinite-scroll>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import { useStore } from "vuex";
import { defineAsyncComponent } from "vue";


export default defineComponent({
  name: "PagePokedex",

  components: {
    CardPokemon: defineAsyncComponent(() =>
      import("components/pokemon_components/CardPokemon.vue")
    ),
  },

  setup() {

    const $store = useStore();
    const pokemonList = ref([])

    return {
      $store,
      pokemonList,
    };
  },

  methods: {

    getPokemons(props) {
      const params = {
        limit: props.limit,
        offset: props.offset
      }

      return this.$store.dispatch("pokemon/getPokemons", params)?.then((res) => {
          return res.data ?? [];
      })
      .catch((err) => {
          console.log(err);
      });
    },

    async onLoad (index, done) {
      const limit = 8;
      let offset = (limit * (index - 1));

      const props = {
        limit,
        offset
      }

      const pokemons = await this.getPokemons(props);

      console.log(index)


      this.pokemonList.push(...pokemons?.results)

      done()

    }


  },

  created() {
    // this.getPokemons();
    // this.onLoad()
  },
});
</script>

<style lang="scss">
  .content--default {
    display: flex;
    justify-content: center;
  }
</style>
