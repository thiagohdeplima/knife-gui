import Vue from 'vue'
import VueRouter from 'vue-router'

import AppListView from "@/views/apps/AppListView.vue"

Vue.use(VueRouter)

const routes = [
  { path: "/apps", component: AppListView }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
