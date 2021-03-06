import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const state = {
  user: {},
  counts: {
    count: -1
  },
  posts: {},
  friends: {}
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
