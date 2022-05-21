import { createRouter, createWebHistory } from "vue-router";
import SearchBar from "../components/SearchBar.vue";
import HomeTab from '../components/HomeTab.vue'

let routes = [
  {
    path: "/",
    component: HomeTab,
  },
  {
    path: "/todo",
    component: SearchBar,
  },
];

let router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
