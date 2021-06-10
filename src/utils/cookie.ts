import Cookies from 'js-cookie'

const TOKEN_NAME = 'token'

export function setCookieToken(token: string) {
  return Cookies.set(TOKEN_NAME, token)
}

export function getCookieToken() {
  return Cookies.get(TOKEN_NAME)
}

export function removeCookieToken() {
  return Cookies.remove(TOKEN_NAME)
}