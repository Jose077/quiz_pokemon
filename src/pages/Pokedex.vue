<template>
  <q-page class="content--default">
    <!-- Filtros -->
    <div style="width: 72vw; margin-top: 1.5rem">
      
        <div class="row justify-center" >
            <div class=" col-12 col-lg-6 col-md-6 bg-red">
                .col <br> <br>
            </div>

            <div class="col-12 col-lg-6 col-md-6 bg-blue ">
                .col <br> <br>
            </div>
        </div>

        <!-- lista de pokedex -->
        <div class="row q-mt-md">
            <div 
              class="col-12 col-lg-3 col-md-3 col-sm-6 q-pa-md"
              v-for="item in data?.results"
              :Key="item"
            >
                <CardPokemon :title="item?.name" :link="item?.url" />
            </div>
        </div>
    </div>

  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from 'vue'
import { useStore } from 'vuex'
import { defineAsyncComponent } from 'vue'


export default defineComponent({
  name: "PagePokedex",

  components: {
    CardPokemon: defineAsyncComponent(() => import('components/pokemon_components/CardPokemon.vue')),
  },

  setup() {

    const $store = useStore()
    let data = ref(null)
    
    return {
      $store,
      data
    }
  },

  methods: {
    getPokemons() {
        this.$store.dispatch("pokemon/getPokemons")?.then((res) => {
          this.data = res.data ?? [];
        }).catch((err) => {
          console.log(err);
        })
    }
  },

  created() {
    this.getPokemons();
  },

});
</script>

<style lang="scss">
  .content--default {
    display: flex;
    justify-content: center;
  }

</style>
