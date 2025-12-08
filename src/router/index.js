import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomeIndex",
    component: () => import("@/views/HomeIndex.vue"),
  },
  {
    path: "/about",
    name: "AboutUs",
    component: () => import("@/views/AboutUs.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
