import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/views/Layout/index.vue"),
      redirect: "/home",
      children: [
        { path: "home", component: () => import("@/views/Home/index.vue") },
        { path: "category", component: () => import("@/views/Category/index.vue") },
      ],
    },
    {
      path: "/login",
      component: () => import("@/views/Login/login.vue"),
    },
  ],
});

export default router;
