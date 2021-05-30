import Cookies from 'js-cookie'

const TOKEN_NAME = 'token'

export function setToken(token: string) {
  Cookies.set(TOKEN_NAME, token)
}

export function getToken() {
  return Cookies.get(TOKEN_NAME)
}