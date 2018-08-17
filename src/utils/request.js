import { GraphQLClient } from 'graphql-request'
import Auth from './auth'

const endpoint = 'http://127.0.0.1:7001/graphql'

const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: null,
  },
})

export default function Request (query, variables) {
  if (Auth.getToken()) client.options.headers.Authorization = `Bearer ${Auth.getToken()}` // 每次请求携带token
  return client.request(query, variables ? variables : {mutationName: null}).then(data => data).catch(err => {
    throw new Error(`${err.response.errors[0].message}`)
  })
}
