<template>
  <q-layout view="lHh Lpr lFf" class="layout-props">

    <!-- Renderização da pagina -->
    <div>
      <router-view />
    </div>

  </q-layout>
</template>

<script>

import { defineComponent, ref } from "vue";



export default defineComponent({
  name: "Login",

  components: {

  },

  setup() {

    return {

    };
  },
});
</script>

<style lang="scss" scoped>
  .layout-props {
 
    font-family: "Poppins", sans-serif;
  }

 

</style>
