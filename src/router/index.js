import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const pageA = { template: '<div style="color:green;font-size:40px;">client side rendering : page A</div>'}
const pageB = { template: '<div style="color:blue;font-size:40px;">client side rendering : page B</div>' }
const pageNotFound = { template: '<div style="color:red;font-size:40px;">page not found</div>' }

export default new VueRouter({
  mode: 'history',
  routes:[
    { path: '/', redirect: '/a' },
    { path: '/a', component: pageA},
    { path: '/b', component: pageB},
    { path :'*', component:pageNotFound}
  ]
})

