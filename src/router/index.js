import Vue from 'vue'
import VueRouter from 'vue-router'
import {NProgress} from '@/plugins/progress'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      component: () => import('@/layouts/Landing'),
      children: [
        {
          name: 'Home',
          path: "",
          component: () => import("@/views/landing/Index"),
          meta: {
            can: true
          }
        },
      ],
    },
    /** Important, leave this route always at the end of the list to handle 404, 500 or another http errors **/
    {
      path: "/error",
      component: () => import('@/layouts/Page'),
      children: [
        {
          name: 'Error',
          path: "",
          component: () => import("@/views/landing/Error"),
          props: true
        }
      ],
    },
    {
      path: "**",
      redirect: "/error",
    },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

// Routes middleware
import store from "@/store";

const waitForStorageToBeReady = async (to, from, next) => {
  await store.restored;
  if (to.name) {
    // Start the route progress bar.
    NProgress.start()
  }
  if (typeof window.source == "function") {
    window.source("Canceled by the user");
  }
  if (to.matched.some(record => record.meta.forVisitors)) {
    if (Vue.auth.isLoggedIn()) {
      next({ name: "Dashboard" });
    } else if (to.matched.some(record => record.meta.can)) {
      next();
    } else {
      next({ name: "Home" });
    }
  } else if (to.matched.some(record => record.meta.requiresAuth)) {
    if (Vue.auth.isNotLoggedIn()) {
      next({ name: "Login" });
    } else if (to.matched.some(record => record.meta.can)) {
      next();
    } else {
      next({ name: "Home" });
    }
  } else {
    next();
  }
};

router.beforeEach(waitForStorageToBeReady)

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  setTimeout(NProgress.done, 1300);
})


export default router
