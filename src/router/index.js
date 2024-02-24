import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue"
import RulesPage from "../views/RulesPage.vue"
import AboutView from "../views/AboutView.vue"
import NotFound from "../components/NotFound.vue"

const router = createRouter({
  history: createWebHistory("frontend/"),
  base: "frontend/",
  routes: [
    {
      path: "/",
      name: "home",
      component: MainPage
    },
    {
      path: "/rules",
      name: "rules",
      component: RulesPage
    },
    {
      path: "/about",
      name: "about",
      component: AboutView
    },
    {
      path: "/:pathMatch(.*)*", 
      component: NotFound, 
    },
   
  ],
});

export default router;
