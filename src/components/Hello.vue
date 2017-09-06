<template>
  <div class="hello">
    <h1>Login</h1>
    <form ref="" :model="user">
      <input v-model="user.username" type="text" placeholder="Nome de usuário">
      <input v-model="user.password" type="password" placeholder="Senha">
      <button type="button" :disabled="this.user === {}" @click="handleSubmit()">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'hello',
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    handleSubmit () {
      this.login(this.user)
    },
    ...mapActions(['login'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
