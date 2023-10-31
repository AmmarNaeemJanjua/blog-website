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
      }
    ],
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import ('@/views/Register.vue'),
    // meta: {auth: false}
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import ('@/views/Login.vue'),
    // meta: {auth: false}
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import ('@/views/Admin.vue'),
    // meta: {auth: true},
    children: [
      {
        path: '',
        name: 'LandingPage',
        component: () => import('@/components/admin/AdminLanding.vue')
      },
      {
        path: '/manageblogs',
        name: 'ManageBlogs',
        component: () => import('@/components/admin/ManageBlogs.vue'),
      },
      {
        path: '/allusers',
        name: 'AllUsers',
        component: () => import('@/components/admin/AllUsers.vue'),
      },
      {
        path: '/managecategories',
        name: 'ManageCategories',
        component: () => import('@/components/admin/ManageCategories.vue')
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

// router.beforeEach((to, from, next)=>{
// })

export default router
