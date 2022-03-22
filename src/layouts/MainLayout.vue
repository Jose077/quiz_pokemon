<template>
  <q-layout view="lHh Lpr lFf">

    <q-header elevated>
      <!-- nav bar -->
      <q-toolbar class="color_nav_bar" style="display: flex; justify-content: space-between">

        <!-- btn toolbar -->
        <q-btn class="hidden-on-desktop" flat @click="drawerLeft = !drawerLeft" round dense icon="menu" />

        <!-- logo site -->
        <div>
          <q-toolbar-title
            class="q-ml-xl "
            style="display: flex; align-items: center; margin-left: 6rem"
          >
            <div @click="$router.push('/')" style="cursor: pointer">
              <img
                alt="Logo"
                src="~assets/certo_errado.png"
                style="height: 40px"
              />

              <img
                alt="Logo"
                src="~assets/poke_logo.svg"
                style="height: 40px"
              />
            </div>
          </q-toolbar-title>
        </div>

        <!-- menu tabs -->
        <q-tabs v-model="tab"  inline-label class="hidden-on-mobile">
          <q-route-tab
            exact
            to="/pokedex"
            name="pokedex"
            icon="mdi-pokeball"
            label="Pokedex"
          />
          <!-- <q-route-tab
            exact
            to="/quizz"
            name="quizz"
            icon="mdi-comment-question-outline"
            label="Quizz"
          /> -->
          <!-- <q-tab name="movies" icon="movie" label="Movies" /> -->
        </q-tabs>

        <!-- informacoes de usuario -->
        <div class="hidden-on-mobile" style="display: flex; gap: 0.6rem; margin: 0px 2rem; align-items: center">
            <div outline class=" text-white" style="height: 2rem; display: flex; align-items: center">
              <b class="q-mr-sm"> {{store?.getters?.getUser?.name}}  </b>

              <q-avatar size="35px" >
                <img :src="store?.getters?.getUser?.picture" />
              </q-avatar>
            </div>

            <span style="font-size: 1.3rem"> | </span>

            <q-icon
              style="cursor: pointer"
              @click="logOut('google')"
              size="1.7rem"
              name="mdi-exit-to-app"
              class="ml-xl"
            />
        </div>

      </q-toolbar>
    </q-header>

    <!-- drawer -->
    <q-drawer
      v-model="drawerLeft"
      :width="200"
      elevated
      no-swipe-close
      style="background:  #E5E5E5"
      class="text-white hidden-on-desktop"
    >

      <div class="q-pa-sm text-black" >
            <q-list style="margin-top: 145px">
              <template v-for="(menuItem, index) in menuList" :key="index">
                <q-item
                  clickable
                  :active="`/${menuItem.router}` === $route.path"
                  v-ripple
                  @click="$router.push(menuItem.router)"
                >
                  <q-item-section >
                    <q-icon size="1.8rem" :name="menuItem.icon" />
                  </q-item-section>

                  <q-item-section>
                    <b style="font-size: 1rem; padding-right: 0px; margin-right: 0px"  > {{ menuItem.label }} </b>
                  </q-item-section>
                </q-item>

                <q-separator :key="'sep' + index"  v-if="menuItem.separator" />

              </template>

                <q-item clickable @click="logOut('google')">
                  <q-item-section >
                    <q-icon size="1.8rem" name="mdi-exit-to-app" />
                  </q-item-section>

                  <q-item-section>
                    <b style="font-size: 1rem; padding-right: 0px; margin-right: 0px"  > Sair </b>
                  </q-item-section>
                </q-item>
            </q-list>

            <q-img class="absolute-top" src="https://lh3.googleusercontent.com/tlIBC-OoNcTiL7SXVcrCIG91xE_XVFzYyRKLouFq5NV7LYOznYyXI7ualBMV15H9L1eGWVGz5Co1GXqqgJYDZ-5sDY7QzPPeTID975gJ3PIpNMc=e365-w1259" style="height: 150px">
                <div class="absolute-bottom bg-transparent">
                  <q-avatar size="56px" class="q-mb-sm">
                    <img :src="store?.getters?.getUser?.picture">
                  </q-avatar>
                  <div class="text-weight-bold">{{store?.getters?.getUser?.name}}</div>
                </div>
            </q-img>
      </div>

    </q-drawer>

    <!-- Renderização da pagina -->
    <div>
      <router-view />
    </div>

  </q-layout>
</template>

<script>

import { useQuasar } from "quasar";
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
const menuList = [
  {
    icon: 'mdi-pokeball',
    label: 'Pokédex',
    separator: true,
    router: 'pokedex'
  },

]

export default defineComponent({
  name: "MainLayout",

  components: {
    // EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const store = useStore();
    const $q = useQuasar();


    return {
      leftDrawerOpen,
      drawerLeft: ref(false),
      store,
      menuList,
      $q,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      tab: ref("pokedex"),
    };
  },

  methods: {

    // logOut
    logOut(network) {
        this.$hello(network).logout().then(() => {
              this.$q.notify({
                message: `Até logo, ${this.store?.getters?.getUser?.name}!`,
                position: "top-right",
                type: 'info',
                timeout: 2000
              })
            // redirect
            this.$router.push('/')
        })
    },

  }


});
</script>

<style lang="scss" scoped>
  body {
    background: $bg_default;

    font-family: "Poppins", sans-serif;
  }

  .color_nav_bar {
    background: $blue_400;
    height: 3.8rem;
  }

  .hidden-on-desktop{
    display: none;
  }

  .q-drawer,  .fullscreen,  .q-drawer__backdrop {
    display: none;
  }

  @media (max-width: 1200px) {
    .hidden-on-desktop {
        display: inherit;
    }

    .hidden-on-mobile {
      display: none !important;
    }

    .q-drawer,  .fullscreen,  .q-drawer__backdrop {
        display: inherit;
    }

  }
</style>
