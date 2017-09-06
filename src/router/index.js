import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Products from '@/components/Products'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Hello,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('token')) {
          next({path: '/products'})
        } else {
          next()
        }
      }
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
      beforeEnter: (to, from, next) => {
        if (!localStorage.getItem('token')) {
          next({path: '/login'})
        } else {
          next()
        }
      }
    }

  ]
})
