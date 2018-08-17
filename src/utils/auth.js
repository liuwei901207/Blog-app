import Cookies from 'js-cookie'

const setToken = (token, rememberMe) => {
  return Cookies.set('token', token, {expires: rememberMe ? 30 : 1 / 12}) // rememberMe === false 30天， 否则 2 小时
}

const getToken = () => {
  return Cookies.get('token')
}

const setUser = (user, rememberMe) => {
  return Cookies.set('user', JSON.stringify(user), {expires: rememberMe ? 30 : 1 / 12}) // rememberMe === false 30天， 否则 2 小时
}

const getUser = () => {
  return Cookies.get('user') ? JSON.parse(Cookies.get('user')) : Cookies.get('user')
}

export default {
  setToken,
  getToken,
  setUser,
  getUser,
}