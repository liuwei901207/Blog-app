import { message } from 'antd'

export function config () {
  return {
    onError (err) {
      err.preventDefault()
      message.error(err.message, 5) // 5 second
    },
  }
}