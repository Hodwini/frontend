import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue"
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
      path: "/:pathMatch(.*)*", 
      component: NotFound, 
    },
   
  ],
});

export default router;
