import { Mutation, ActionHandler } from 'vuex'
import { getToken } from '@/utils/cookie'

export interface UserState {
  token: string | undefined | null,
  userInfo: Record<string, unknown> | null
}

type MuType = Mutation<UserState>

const state: UserState = {
  token: getToken(),
  userInfo: null
}


const mutations = {
  setToken(state: UserState, token: string): void {
    state.token = token
  }
}

const actions = {
  setToken({ commit: (x: string, payload: unknown) => void } : { commit }, token: string) {
  commit('setToken', token)
}
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}