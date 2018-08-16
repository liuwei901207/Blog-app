import { GraphQLClient } from 'graphql-request'

const endpoint = 'http://127.0.0.1:7001/graphql'

const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: 'Bearer my-jwt-token',
  },
})

export default function Request (query) {
  return client.request(query).then(data => ({data})).catch(err => {
    console.log(err.response.errors) // GraphQL response errors
    console.log(err.response.data) // Response data if available
  })
}
