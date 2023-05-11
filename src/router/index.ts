import { createRouter, createWebHistory } from 'vue-router'

import SignIn from '@/views/SignIn.vue'
import SignUp from '@/views/SignUp.vue'
import Dashboard from '@/views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/signup',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/signin',
      name: 'signIn',
      component: SignIn
    }
  ]
})

export default router
