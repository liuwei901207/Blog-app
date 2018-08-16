import onError from './plugins/onError'

export function config () {
  return {
    onError (err) {
      err.preventDefault()
      onError(err.message)
    },
  }
}