import { UserState } from './modules/user'
import { GetterTree } from 'vuex'

interface StateType {
  user: UserState
}
const getters: GetterTree<StateType, unknown> = {
  token: (state) => state.user.token
}

export default getters