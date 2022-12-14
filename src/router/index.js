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
    path: "/TLCs",
    name: "terms&conditions",

    component: () => import("../views/termsAndConditions.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/home.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/about.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/contact.vue"),
  },
  {
    path: "/results",
    name: "results",
    component: () => import("../views/resultsView.vue"),
  },
  {
    path: "/elections",
    name: "Elections",
    component: () => import("../views/Elections.vue"),
    props: true,
  },
  {
    path: "/elections/:id",
    name: "elections",
    component: () => import("../views/Elections.vue"),
    props: true,
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/adminUsers",
    name: "adminUsers",
    component: () => import("../views/adminUsersTable.vue"),
  },
  {
    path: "/adminElections",
    name: "adminElections",
    component: () => import("../views/adminElectionsTable.vue"),
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
