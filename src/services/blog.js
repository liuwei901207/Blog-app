import request from '../utils/request'

/**
 * 用户登录
 * @param username
 * @param password
 * @param rememberMe
 * @returns {*}
 */
export function *login ({username, password, rememberMe}) {
  const mutationName = 'login'
  const mut = (`
      mutation{
      ${mutationName}(username:"${username}",password:"${password}",rememberMe:${rememberMe}){
        token,
        user{
          id,
          username,
          name,
          email,
          cell_phone,
          last_sign_in_at
        }
      }
    }
  `)
  const {login} = yield request(mut, {mutationName})
  return login
}

/**
 *
 * @returns {IterableIterator<*>}
 */
export function *logout () {
  const mutationName = 'logout'
  const mut = (`
      mutation{
      ${mutationName}{
        token,
        user{
          id,
        }
      }
    }
  `)
  const {logout} = yield request(mut, {mutationName})
  return logout
}