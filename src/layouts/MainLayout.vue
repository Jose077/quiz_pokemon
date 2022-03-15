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
                alt="Quasar logo"
                src="~assets/certo_errado.png"
                style="height: 40px"
              />

              <img
                alt="Quasar logo"
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
          <q-route-tab
            exact
            to="/quizz"
            name="quizz"
            icon="mdi-comment-question-outline"
            label="Quizz"
          />
          <!-- <q-tab name="movies" icon="movie" label="Movies" /> -->
        </q-tabs>

        <!-- informacoes de usuario -->
        <div class="hidden-on-mobile">
            <q-chip outline class=" text-white" style="height: 2rem">
              <q-avatar size="40px" style="border: 1px solid white">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>

              <b> John Doe </b>
            </q-chip>

            <q-btn
              rounded
              outline
              icon-right="mdi-exit-to-app"
              class="q-mr-xl q-ml-xs"
              style="padding: 0px 10px; "
            >
              logout
            </q-btn>
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
            </q-list>

            <q-img class="absolute-top" src="https://lh3.googleusercontent.com/tlIBC-OoNcTiL7SXVcrCIG91xE_XVFzYyRKLouFq5NV7LYOznYyXI7ualBMV15H9L1eGWVGz5Co1GXqqgJYDZ-5sDY7QzPPeTID975gJ3PIpNMc=e365-w1259" style="height: 150px">
                <div class="absolute-bottom bg-transparent">
                  <q-avatar size="56px" class="q-mb-sm">
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                  </q-avatar>
                  <div class="text-weight-bold">John Doe</div>
                  <div>@jhonDoe</div>
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

import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

const menuList = [
  {
    icon: 'mdi-pokeball',
    label: 'Pokédex',
    separator: true,
    router: 'pokedex'
  },
  {
    icon: 'mdi-comment-question-outline',
    label: 'Quizz',
    separator: true,
    router: 'quizz'

  },

  {
    icon: 'mdi-exit-to-app',
    label: 'Sair',
    separator: false,
    router: '/'

  }


]

export default defineComponent({
  name: "MainLayout",

  components: {
    // EssentialLink,
  },

  setup() {
    const $router = useRouter();
    const leftDrawerOpen = ref(false);

    return {
      menuList,
      leftDrawerOpen,
      drawerLeft: ref(false),

      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      tab: ref("pokedex"),
    };
  },
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
      display: none;
    }

    .q-drawer,  .fullscreen,  .q-drawer__backdrop {
        display: inherit;
    }

  }
</style>
