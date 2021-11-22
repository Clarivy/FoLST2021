import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home | FoLST2021',
      color: 'white'
    }
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: () => import(/* webpackChunkName: "agenda" */ '../views/Schedule.vue'),
    meta: {
      title: 'Schedule | FoLST2021',
      color: 'white'
    }
  },
  {
    path: '/community-guidelines',
    name: 'Community Guidelines',
    component: () => import(/* webpackChunkName: "Community Guidelines" */ '../views/CommunityGuidelines.vue'),
    meta: {
      title: 'Community Guidelines | FoLST2021',
      color: 'white'
    }
  },
  {
    path: '/speakers',
    name: 'Speakers',
    component: () => import(/* webpackChunkName: "speakers" */ '../views/Speakers.vue'),
    meta: {
      title: 'Speakers | FoLST2021',
      color: 'white'
    }
  },
  {
    path: '/coc',
    name: 'CodeofConducts',
    component: () => import(/* webpackChunkName: "speakers" */ '../views/COC.vue'),
    meta: {
      title: 'Code of Conducts | FoLST2021',
      color: 'white'
    }
  },
  {
    path: '/tc',
    name: 'ParticipationTerms',
    component: () => import(/* webpackChunkName: "ParticipationTerms" */ '../views/TC.vue'),
    meta: {
      title: 'Participation Terms & Privacy Policy | FoLST2021',
      color: 'white'
    }
  },
  {
    path: '*',
    name: 'redirect',
    redirect: {
      path: '/'
    },
    meta: {
      title: `Redirect `,
      color: "white",
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
