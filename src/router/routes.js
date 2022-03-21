const routes = [
  {
    path: "/",
    meta: { requiresAuth: false },
    component: () => import("layouts/Login.vue"),
    children: [{ path: "", component: () => import("pages/Login.vue") }],
  },
  {
    path: "/pokedex",
    meta: { requiresAuth: true },
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Pokedex.vue") }],
  },
  {
    path: "/quizz",
    meta: { requiresAuth: false },
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
