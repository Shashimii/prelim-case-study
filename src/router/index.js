import { createRouter, createWebHistory } from 'vue-router'
import TodoList from '../views/TodoList.vue'

const routes = [
  {
    path: '/',
    name: 'TodoList',
    component: TodoList
  },
  {
    path: '/priorityList',
    name: 'priorityList',
    component: () => import('../views/PriorityList.vue')
  },
  {
    path: '/completedList',
    name: 'completedList',
    component: () => import('../views/CompletedList.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
