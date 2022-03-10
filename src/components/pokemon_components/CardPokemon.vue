<template>
    <q-card class="bordered" style="border-radius: 2rem" >
      <div style="display: flex; justify-content: center; ">
        <img style="width: 12rem;" :src="pokemonData?.sprites?.front_default" />
      </div>

        <!-- <pre style="background: black; color: white; overflow-x: scroll" >{{pokemonData}}</pre> - aqui -->

        <q-list class="q-pb-md q-mt-sm">

            <span class="q-ml-md text-h5"> {{ title || 'Não encontrado!'}} </span>

            <q-item clickable>
                <q-item-section avatar>
                <q-icon color="primary" name="local_bar" />
                </q-item-section>

                <q-item-section>
                <q-item-label>Bar XYZ</q-item-label>
                <q-item-label caption>Have a drink.</q-item-label>
                </q-item-section>
            </q-item>
        </q-list>
    </q-card>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useStore } from 'vuex';


export default defineComponent({
  name: "CardPokemon",

  setup(){
    const $store = useStore()

    let pokemonData = ref(null)

    return {
      pokemonData,
      $store 
    }
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
    getPokemonByName(name){
      this.$store.dispatch("pokemon/getPokemonByName", name).then((res) => {
        this.pokemonData = res.data ?? []
      }).catch((err) => {
        console.log(err);
      })
    },

    arrea(){
        this.getPokemonByName(this.title)
    }
  },

  created(){
      this.getPokemonByName(this.title)
  }
});
</script>
