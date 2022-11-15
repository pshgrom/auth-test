import { createRouter, createWebHistory } from "vue-router";
import Auth from "../pages/Auth.vue";
import Profile from "../pages/Profile.vue";
import NotFound from "../pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: Auth,
      meta: {
        auth: false,
      },
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      meta: {
        auth: true,
      },
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFound,
      meta: {
        auth: false,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  const requiredAuth = to.matched.some((record) => record.meta.auth);

  if (requiredAuth && !token) {
    next("/login");
  } else {
    next();
  }
});

export default router;
