import { createStore } from 'vuex'

export default createStore({
  state: {
    menuShow: true
  },
  mutations: {
    changeMenuShow(state) {
      state.menuShow = !(state.menuShow)
    }
  },
  actions: {
  },
  modules: {
  }
})
