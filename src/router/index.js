// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import ('@/views/Register.vue')
      },
      {
        
        path: 'blogpage/:id',
        name: 'Blogpage',
        component: () => import ('./../components/SpecificBlogPage.vue')
      },
      {
        path: 'new-blog',
        name: 'AddBlogPage',
        component: () => import ('./../components/AddBlogPage.vue')
      },


    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
