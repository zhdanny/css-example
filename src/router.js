import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
    path: '/',
    name: 'home',
    component: ()=> import ('./views/home.vue')
  },{
    path: '/colors',
    name: 'colors',
    component: ()=> import ('./views/colors.vue')
  },{
    path: '/styles',
    name: 'styles',
    component: ()=> import ('./views/styles.vue')
  },{
    path: '/filter',
    name: 'Filters',
    component: ()=> import ('./views/filter.vue')
  },{
    path: '/test',
    name: 'test',
    component: () => import ('./views/test.vue')
  },{
    path: '/test2',
    name: 'test2',
    component: () => import ('./views/test2.vue')
  }]
})
