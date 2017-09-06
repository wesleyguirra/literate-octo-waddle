import http from '../services/http'

export default {
  login ({commit}, credentials) {
    return http.post('auth', {
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
