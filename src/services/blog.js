import request from '../utils/request'

/**
 * 用户登录
 * @param username
 * @param password
 * @param rememberMe
 * @returns {*}
 */
export function login ({username, password, rememberMe}) {
  const mut = `mutation {
  login(username: ${username},password: ${password},rememberMe: ${rememberMe}) {
    id
  }`
  return request(mut)
}