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
      title: 'Home | FoLST 2021',
      color: 'white'
    }
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: () => import(/* webpackChunkName: "agenda" */ '../views/Schedule.vue'),
    meta: {
      title: 'Schedule | FoLST 2021',
      color: 'white'
    }
  },
  {
    path: '/community-guidelines',
    name: 'Community Guidelines',
    component: () => import(/* webpackChunkName: "Community Guidelines" */ '../views/CommunityGuidelines.vue'),
    meta: {
      title: 'Community Guidelines | FoLST 2021',
      color: 'white'
    }
  },
  {
    path: '/communities',
    name: 'Communities',
    component: () => import(/* webpackChunkName: "Community Guidelines" */ '../views/Communities.vue'),
    meta: {
      title: 'Communities | FoLST 2021',
      color: 'white'
    }
  },
  {
    path: '/resources',
    name: 'Resources',
    component: () => import(/* webpackChunkName: "Resources" */ '../views/Resources.vue'),
    meta: {
      title: 'Resources | FoLST 2021',
      color: 'white'
    }
  },
  // {
  //   path: '/partners',
  //   name: 'Partners',
  //   component: () => import(/* webpackChunkName: "partners" */ '../views/Partners.vue'),
  //   meta: {
  //     title: 'Partners | FoLST 2021',
  //     color: 'white'
  //   }
  // },
  // {
  //   path: '/volunteers',
  //   name: 'Volunteers',
  //   component: () => import(/* webpackChunkName: "volunteers" */ '../views/Volunteers.vue'),
  //   meta: {
  //     title: 'Volunteers | FoLST 2021',
  //     color: 'white'
  //   }
  // },
  // {
  //   path: '/registration',
  //   name: 'Registration',
  //   component: () => import(/* webpackChunkName: "registration" */ '../views/Registration.vue'),
  //   meta: {
  //     title: 'Registration | FoLST 2021',
  //     color: 'white'
  //   }
  // },
  {
    path: '/speakers',
    name: 'Speakers',
    component: () => import(/* webpackChunkName: "speakers" */ '../views/Speakers.vue'),
    meta: {
      title: 'Speakers | FoLST 2021',
      color: 'white'
    }
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import(/* webpackChunkName: "speakers" */ '../views/FAQ.vue'),
    meta: {
      title: 'FAQ | FoLST 2021',
      color: 'white'
    }
  },
  {
    path: '/coc',
    name: 'CodeofConducts',
    component: () => import(/* webpackChunkName: "speakers" */ '../views/COC.vue'),
    meta: {
      title: 'Code of Conducts | FoLST 2021',
      color: 'white'
    }
  },
  {
    path: '/winners',
    name: 'Quiz Winners',
    component: () => import(/* webpackChunkName: "speakers" */ '../views/Winners.vue'),
    meta: {
      title: 'Winners | FoLST 2021',
      color: 'white'
    }
  },
  // {
  //   path: '/team',
  //   name: 'Team',
  //   component: () => import(/* webpackChunkName: "team" */ '../views/Team.vue'),
  //   meta: {
  //     title: 'Team | FoLST 2021',
  //     color: 'white'
  //   }
  // },
  {
    path: '/tc',
    name: 'ParticipationTerms',
    component: () => import(/* webpackChunkName: "ParticipationTerms" */ '../views/TC.vue'),
    meta: {
      title: 'Participation Terms & Privacy Policy | FoLST 2021',
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
