import * as blogService from '../services/blog'
import router from 'umi/router'
import Auth from '../utils/auth'

export default {

  namespace: 'auth',

  state: {
    user: Auth.getUser() || null,
    token: Auth.getToken() || null,
  },

  reducers: {
    save (state, {payload: {token, user, rememberMe}}) {
      // 保存到cookie中
      Auth.setToken(token)
      Auth.setUser(user)
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
      yield put({type: 'save', payload: {token, user}})
      router.push('/login') // 登出成功返回登录页面
    },
  },

  subscriptions: {},

}