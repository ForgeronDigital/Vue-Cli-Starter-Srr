import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export function createRouter() {
  const routes = [
    {
      path: '/',
      name: 'home',
      component: require("../views/Home.vue").default
    },
    {
      path: '/me',
      name: 'me',
      component: require("../views/Me.vue").default
    }
  ]

  const router = new VueRouter({
    mode: "abstract",
    // base: process.env.BASE_URL,
    routes
  })

  return router;
}
