import { MutationTree, ActionTree } from 'vuex'
import { getToken } from '@/utils/cookie'

export interface UserState {
  token: string | undefined | null
  userInfo: Record<string, unknown> | null
}

const state: UserState = {
  token: getToken(),
  userInfo: null
}

const mutations: MutationTree<UserState> = {
  setToken(state: UserState, token: string): void {
    state.token = token
  }
}

const actions: ActionTree<UserState, unknown> = {
  setToken({ commit }, token: string) {
    commit('setToken', token)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}