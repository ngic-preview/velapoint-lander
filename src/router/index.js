import HealthInsurance from '../views/HealthInsurance.vue'
import Home from '../views/Home.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/health-insurance',
    name: 'HealthInsurance',
    component: HealthInsurance,
  },
  {
    path: '/thank-you',
    name: 'ThankYou',
    component: () => import(/* webpackChunkName: "thank-you" */ '../views/ThankYou.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
