<template>
  <q-page class="flex flex-center">
    
    <pre> {{data}} </pre>: data aqui
    <!-- <img
      alt="Quasar logo"
      src="~assets/poke_logo.svg"
      style="width: 200px; height: 200px"
    /> -->

    <q-btn @click="alertarAlert()">
      Arrea
    </q-btn>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from 'vue'
import { useStore } from 'vuex'


export default defineComponent({
  name: "PagePokedex",

  setup() {

    const $store = useStore()
    let data = ref(null)
    
    return {
      $store,
      data
    }
  },

  methods: {

    alertarAlert(){
      this.getPokemons();
    },

    getPokemons() {
        this.$store.dispatch("getPokemons").then((res) => {
          this.data = res.data;
        }).catch((err) => {
          console.log(err);
        })
    }
  },

  created() {
    this.data = this.getPokemons();
  },
});
</script>
