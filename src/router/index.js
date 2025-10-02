import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompanyInfoView from '@/views/CompanyInfoView.vue'
import AboutproductView from '../views/AboutproductView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about-product',
      name: 'about-product',
      component: AboutproductView,
    },
    {
      path: '/company-info',
      name: 'companyInfo',
      component: CompanyInfoView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import(`../views/NotFoundView.vue`),
    },
  ],
})

export default router
