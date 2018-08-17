import * as blogService from '../services/blog'
import router from 'umi/router'
import AuthHelper from '../utils/authHelper'

export default {

  namespace: 'auth',

  state: {
    user: AuthHelper.getUser() || null,
    token: AuthHelper.getToken() || null,
  },

  reducers: {
    save (state, {payload: {token, user, rememberMe}}) {
      // 保存到cookie中
      AuthHelper.setToken(token)
      AuthHelper.setUser(user)
      return {...state, token, user}
    },
    remove (state, {payload: {token, user}}) {
      // 保存到cookie中
      AuthHelper.clearToken()
      AuthHelper.clearUser()
      return {...state, token, user}
    },
  },

  effects: {
    *login ({payload: {username, password, rememberMe}}, {call, put}) {
      const {token, user} = yield call(blogService.login, {username, password, rememberMe})
      yield put({type: 'save', payload: {token, user, rememberMe}})
      router.push('/admin') // 登录成功返回管理页面首页
    },
    *logout ({payload}, {call, put}) {
      const {token, user} = yield call(blogService.logout)
      console.log(token, user)
      yield put({type: 'save', payload: {token, user}})
      router.push('/login') // 登出成功返回登录页面
    },
  },

  subscriptions: {},

}