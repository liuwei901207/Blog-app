import Cookies from 'js-cookie'

const clearToken = () => {
  return Cookies.remove('token')
}

const setToken = (token, rememberMe) => {
  return Cookies.set('token', JSON.stringify(token), {expires: rememberMe ? 30 : 1 / 12}) // rememberMe === false 30天， 否则 2 小时
}

const getToken = () => {
  return JSON.parse(Cookies.get('token'))
}

const clearUser = () => {
  return Cookies.remove('user')
}

const setUser = (user, rememberMe) => {
  return Cookies.set('user', JSON.stringify(user), {expires: rememberMe ? 30 : 1 / 12}) // rememberMe === false 30天， 否则 2 小时
}

const getUser = () => {
  return Cookies.get('user') ? JSON.parse(Cookies.get('user')) : Cookies.get('user')
}

export default {
  clearToken,
  setToken,
  getToken,
  clearUser,
  setUser,
  getUser,
}