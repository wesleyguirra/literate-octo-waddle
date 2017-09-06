import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

export default {
  login ({commit}, credentials) {
    return axios.post('auth', {
      username: credentials.username,
      password: credentials.password
    })
      .then(response => {
        commit('LOGIN')
        localStorage.setItem('token', response.data.token)
        commit('LOGIN_SUCCESS')
        return response
      })
  },
  logout ({commit}) {
    localStorage.removeItem('token')
    commit('LOGOUT')
  }
}
