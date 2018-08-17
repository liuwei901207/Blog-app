import * as blogService from '../services/blog'

export default {

  namespace: 'user',

  state: {
    user: null,
  },

  reducers: {
    save (state, {payload: {user}}) {
      return {...state, user}
    },
  },

  effects: {
    *login ({payload: {username, password, rememberMe}}, {call, put}) {
      const {user} = yield call(blogService.login, {username, password, rememberMe})
      console.log(user)
      yield put({type: 'save', payload: {user}})
    },
  },

  subscriptions: {},

}