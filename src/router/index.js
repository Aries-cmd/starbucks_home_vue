import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: "/home"
  },
  { 
    path: '/home',
    name: 'Home',
    component: () => import("../views/home/index.vue"),
    children: [
      {
        path: "",
        component: () => import("../views/default/index.vue")
      },
      {
        path: "/store",
        name: "Store",
        component: () => import("../views/store/index.vue")
      },
      {
        path: "/account",
        name: "Account",
        component: () => import("../views/account/index.vue")
      },
      {
        path: "/menu",
        name: "Menu",
        component: () => import("../views/menu/index.vue")
      },
      {
        path: "/register",
        name: "Register",
        component: () => import("../views/register/index.vue")
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
