import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    items: [
      {
        text: "Home",
        to: "/",
        icon: "mdi-home",
        meta: {
          showToolbar: true,
          showBottomNav: true,
        },
      },
      {
        text: "Schedule",
        to: "/schedule",
        icon: 'mdi-format-float-left',
        meta: {
          showToolbar: true,
          showBottomNav: true,
        },
      },
      {
        text: "Speakers",
        to: "/speakers",
        icon: 'mdi-account-switch',
        meta: {
          showToolbar: true,
          showBottomNav: true,
        },
      },
      {
        text: "Committee",
        to: "/OC",
        icon: 'mdi-account-switch',
        meta: {
          showToolbar: true,
          showBottomNav: true,
        },
      },
      {
        text: "Register",
        to: "/registration",
        icon: 'mdi-star',
        meta: {
          showToolbar: false,
          showBottomNav: false,
        },
      },
      // {
      //   text: "Team",
      //   to: "/team",
      //   icon: "mdi-account-multiple",
      //   meta: {
      //     showToolbar: true,
      //     showBottomNav: false,
      //   },
      // },
      // {
      //   text: "Volunteers",
      //   to: "/volunteers",
      //   icon: 'mdi-account-switch',
      //   meta: {
      //     showToolbar: true,
      //     showBottomNav: false,
      //   },
      // },

    ],
  },
  getters:{
    links: (state) => {
      return state.items
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer)
  },
  actions: {
  },
  modules: {
  }
})
