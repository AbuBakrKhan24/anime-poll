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
    name: "LandingPage",

    component: () => import("../views/LandingPage.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/home.vue"),
  },
  {
    path: "/results",
    name: "results",
    component: () => import("../views/resultsView.vue"),
  },
  // {
  //   path: "/home/:id",
  //   name: "SingleBook",
  //   component: () => import("../views/SingleBook.vue"),
  //   props: true,
  // },
  {
    path: "/elections",
    name: "Elections",
    component: () => import("../views/Elections.vue"),
    props: true,
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import("../views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
