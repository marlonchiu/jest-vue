import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  inputValue: ''
}
const mutations = {
  changeInputValue (state, value) {
    state.inputValue = value
  }
}
const actions = {}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
