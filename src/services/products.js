import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

export function getProducts () {
  return axios.get('products', {headers: {'x-access-token': localStorage.getItem('token')}})
    .then(response => {
      return response.data
    })
}
