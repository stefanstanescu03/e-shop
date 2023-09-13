import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Cart from "../views/Cart.vue";
import Profile from "../views/Profile.vue";
import Explore from "../views/Explore.vue"

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/login", name: "Login", component: Login },
  { path: "/cart", name: "Cart", component: Cart },
  { path: "/profile", name: "Profile", component: Profile },
  { path: "/explore", name: "Explore", component: Explore },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
