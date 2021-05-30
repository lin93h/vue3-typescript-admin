import { UserState } from './modules/user'

interface StateType {
  user: UserState
}
const getters = {
  token: (state: StateType) => state.user.token
}

export default getters