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
    // background: linear-gradient($blue_400, $blue_200);
    background-image: linear-gradient(to bottom, $blue_400 20%, $blue_200 100%);

    font-family: "Poppins", sans-serif;
  }

 

</style>
