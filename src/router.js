import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
Vue.use(Router)

const router = new Router({
  routes,
  //base:"/Bejattos/", //solo usar en folder y for deploy
  mode: 'history'
})

export default router;