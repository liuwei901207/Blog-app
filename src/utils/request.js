import { GraphQLClient } from 'graphql-request'

const endpoint = 'http://127.0.0.1:7001/graphql'

const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: 'Bearer my-jwt-token',
  },
})

export default function Request (query) {
  return client.request(query).then(data => ({data})).catch(err => {
    const status = err.response.status
    let errorMsg = ''
    switch (status) {
      case 400:
        errorMsg = `【Graphql请求参数错误】${err.response.errors[0].message}`
        break
      case 401:
        errorMsg = `【权限错误】${err.response.errors[0].message ? err.response.errors[0].message : '尚未登录'}`
        break
      case 500:
        errorMsg = `【服务器异常】${err.response.errors[0].message ? err.response.errors[0].message : '请稍后再试!'}`
        break
      default:
        errorMsg = `${err.response.errors[0].message}`
    }

    throw new Error(errorMsg)
  })
}
