import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

export default {
  login (credentials) {
    return axios.post('auth', {
      username: credentials.username,
      password: credentials.password
    })
      .then(response => {
        localStorage.setItem('token', response.data.token)
      })
  }
}
