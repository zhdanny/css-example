import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
    path: '/',
    name: 'home',
    component: () =>
      import ('./views/home.vue')
  },{
    path: '/colors',
    name: 'colors',
    component: ()=> import ('./views/colors.vue')
  }]
})
