import { GraphQLClient } from 'graphql-request'
import AuthHelper from './authHelper'

const endpoint = 'http://127.0.0.1:7001/graphql'

const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: null,
  },
})

export default function Request (query, variables) {
  if (AuthHelper.getToken()) client.options.headers.Authorization = `Bearer ${AuthHelper.getToken()}` // 每次请求携带token
  return client.request(query, variables ? variables : {mutationName: null}).then(data => data).catch(err => {
    console.log(err.response)
    throw new Error(`${err.response.message || err.response.errors[0].message}`)
  })
}
