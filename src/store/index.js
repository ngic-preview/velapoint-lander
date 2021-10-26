import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    config: {
      phoneNumber: '8774341904',
      phoneNumberFormatted: '(877) 434-1904',
    },
    formData: {},
  },
  mutations: {
    SET_FORM_DATA({ state }, data) {
      state.formData = data
    },
    CLEAR_FORM_DATA({ state }) {
      state.formData = {}
    },
  },
  actions: {
    setFormData({ commit }, data) {
      commit('SET_FORM_DATA', data)
    },
  },
  modules: {},
  getters: {
    getFormData: (state) => state.formData,
  },
})
