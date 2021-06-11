import { createStore } from 'vuex'
// import getters from './getters'
import user from './modules/user'
import tagsView from './modules/tagsView'

export default createStore({
  // getters,
  modules: {
    user,
    tagsView
  }
})
