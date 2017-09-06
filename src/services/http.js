import axios from 'axios'

const client = axios.create({baseURL: 'http://localhost:3000'})

axios.interceptors.response.use((response) => {
  return response
}, function (error) {
  if (error.response.status === 401) {
    console.log('Unauthorized')
    localStorage.removeItem('token')
  }
  return Promise.reject(error)
})

export default client
