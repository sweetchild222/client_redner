import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }


export default new VueRouter({
  mode: 'history',
  routes:[
    { path: '/', redirect: '/foo' },
    { path: '/foo', component: Foo, name: "foo" },
    { path: '/bar', component: Bar, name: "bar" }
  ]
})

