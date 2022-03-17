<template>

    <div style="display: flex; justify-content: center">
      <!-- lista de pokedex -->
      <div class=" q-mt-md" style="max-width: 68rem; ">
        
        <!-- filtro por nome-->
        <div
          style="
            display: flex;
            justify-content: center;
            margin: 4.4rem 1rem 0.5rem 1rem;
          "
        >
          <q-input
            style="width: 100%"
            color="blue-10"
            bg-color="grey-12"
            outlined
            placeholder="Digite o nome do pokémon!"
            v-model="namePokemonVModel"
          >
            <template v-slot:append>
              <q-icon 
                name="search" 
                size="1.8rem"
              />
            </template>
            
          </q-input>
        </div>

        <div class="q-ml-xl">
                 {{$store.state.teste_number}}

                 {{$store.state.user}}

                 <br>

                <q-btn @click="$store.commit('SET_USER', {nome: 'ontonhe', idade: 2})"> Arrea </q-btn>

        </div>
 
        <!-- Lista infinita de pokemons -->
        <q-infinite-scroll 
          @load="onLoad" 
          :offset="250" 
          class="row"
          :key="keyList"
        >
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
              <q-spinner-dots style="color: #0A2C59" size="70px" />
            </div>
          </template>

        </q-infinite-scroll>
      </div>

    </div>

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
    const allPokemonsList = ref([])

    return {
      $store,
      pokemonList,
      allPokemonsList,
      namePokemonVModel: ref(''),
      timeFilterByName: ref(null),
      keyList: ref(0)
    };
  },

  methods: {

    filterPokemonByName(name) {
        if(name?.trim()){
          const allPokemons = this.allPokemonsList.results;

          this.pokemonList = allPokemons.filter((pokemon) => pokemon?.name?.includes(name));

          this.keyList++;

        } else {

          this.pokemonList = [];

          this.keyList++;
        }
    },

    // Funções de comunicação com a API
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

    },

    getPokemonsForFilter(props) {
      const params = {
        limit: 9999,
      }

      return this.$store.dispatch("pokemon/getPokemons", params)?.then((res) => {
          return res.data ?? [];
      })
      .catch((err) => {
          console.log(err);
      });
    },

  },

  watch: {
      namePokemonVModel: function(val) {
        // debouce
        clearTimeout(this.timeFilterByName);

        this.timeFilterByName = setTimeout(() => {
            this.filterPokemonByName(val)
        }, 500)

      }
  },

  async created() {
    this.allPokemonsList = await this.getPokemonsForFilter();

    console.log("user pokemon", this.$store.state)
  },

});
</script>

<style lang="scss">
  .content--default {
    display: flex;
    justify-content: center;
  }
</style>
