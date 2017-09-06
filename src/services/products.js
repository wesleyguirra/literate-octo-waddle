import http from './http'

http.interceptors.response.use((response) => {
  return response
}, function (error) {
  if (error.response.status === 401) {
    console.log('Unauthorized')
    localStorage.removeItem('token')
  }
  return Promise.reject(error)
})

export function getProducts () {
  return http.get('products', {headers: {'x-access-token': localStorage.getItem('token')}})
    .then(response => {
      return response.data
    })
}
