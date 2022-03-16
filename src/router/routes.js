const routes = [
  {
    path: "/",
    component: () => import("layouts/Login.vue"),
    children: [{ path: "", component: () => import("pages/Login.vue") }],
  },
  {
    path: "/pokedex",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Pokedex.vue") }],
  },
  {
    path: "/quizz",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Quizz.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
