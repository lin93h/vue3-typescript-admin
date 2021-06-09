import { MutationTree, ActionTree } from 'vuex'
import { getToken } from '@/utils/cookie'
import { getUserInfo } from '@/api/user'

export interface UserState {
  token: string | undefined | null
  userInfo: Record<string, unknown> | null
  roles: Array<string>
}

const state: UserState = {
  token: getToken(),
  userInfo: null,
  roles: []
}

const mutations: MutationTree<UserState> = {
  setToken(state: UserState, token: string) {
    state.token = token
  },
  getUser(state: UserState, userInfo: Record<string, unknown>) {
    state.userInfo = userInfo
  },
  setRoles(state: UserState, roles: Array<string>) {
    state.roles = roles
  }
}

const actions: ActionTree<UserState, unknown> = {
  // 设置token
  setToken({ commit }, token: string) {
    commit('setToken', token)
  },
  clearState({ commit }) {
    commit('setToken', '')
  },
  // 设置用户信息
  getUser({ commit }) {
    getUserInfo().then(res => {
      const { user, roles } = res
      commit('getUser', user)
      commit('setRoles', roles)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}