import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoList from './containers/TodoList/TodoList.vue'
import NotFound from './containers/NotFound/NotFound.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: TodoList
}, {
  path: '*',
  component: NotFound
}]

const router = new VueRouter({
  routes
})

export default router
