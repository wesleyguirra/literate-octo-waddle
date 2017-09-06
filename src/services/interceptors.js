import axios from 'axios'

export default (store, router) => {
  axios.interceptors.response.use(
    response => response,
    (error) => {
      if (error.response.status === 401) {
        router.push({ name: 'login' })
      }
      return Promise.reject(error)
    })
}

