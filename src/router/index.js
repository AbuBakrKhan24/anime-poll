import { createRouter, createWebHistory } from "vue-router";
import SignUpView from "../views/SignUpView.vue";

const routes = [
  {
    path: "/signup",
    name: "signup",
    component: SignUpView,
  },
  {
    path: "/login",
    name: "login",

    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/",
    name: "HomeView",

    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/vote",
    name: "vote",
    component: () => import("../views/vote.vue"),
  },
  {
    path: "/results",
    name: "results",
    component: () => import("../views/resultsView.vue"),
  },
  {
    path: "/vote/:id",
    name: "SingleBook",
    component: () => import("../views/SingleBook.vue"),
    props: true,
  },
  {
    path: "/Admin",
    name: "Admin",
    component: () => import("../views/AdminBooks.vue"),
  },
  {
    path: "/adminuser",
    name: "adminuser",
    component: () => import("../views/AdminUsers.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "404NotFound",
    component: () => import("../views/404NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
