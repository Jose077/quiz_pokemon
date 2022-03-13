<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <!-- nav bar -->
      <q-toolbar class="bg-warning">
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        /> -->

        <q-toolbar-title
          class="q-ml-xl"
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

        <q-tabs v-model="tab" class="text-black" inline-label>
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

        <q-space />

        <!-- informacoes de usuario -->
        <q-chip outline color="black">
          <q-avatar size="33px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          John Doe
        </q-chip>

        <q-btn
          rounded
          outline
          icon-right="mdi-exit-to-app"
          class="q-mr-xl q-ml-xs"
          color="black"
          size="sm"
        >
          sair
        </q-btn>
      </q-toolbar>
    </q-header>

    <!-- drawer -->
    <!-- <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>
        <h4>Vai ter algum menu aqui!</h4>

       // <EssentialLink
         // v-for="link in essentialLinks"
         // :key="link.title"
          //v-bind="link"
       //  />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "MainLayout",

  components: {
    // EssentialLink,
  },

  setup() {
    const $router = useRouter();
    const leftDrawerOpen = ref(false);

    return {
      // essentialLinks: linksList,

      leftDrawerOpen,

      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      tab: ref("pokedex"),
    };
  },
});
</script>

<style lang="scss">
body {
  background: $bg_default;

  font-family: "Poppins", sans-serif;
}
</style>
