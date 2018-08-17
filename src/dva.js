import { message } from 'antd'

export function config () {
  return {
    onError (err) {
      err.preventDefault()
      switch (err.message) {
        default:
          message.error(err.message, 5) // 5 second
      }
    },
  }
}