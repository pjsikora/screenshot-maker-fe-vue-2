<template>
  <div class="">
    <h1>User register</h1>
    <form action="">
      <label>
        Login:
        <input type="text" placeholder="login" v-model="login">
      </label>
      <label>
        Password:
        <input type="text" placeholder="password" v-model="password">
      </label>
      <label>
        Password retype:
        <input type="text" placeholder="password" v-model="password">
      </label>
      <div class="button" v-on:click="register()">Register</div>
    </form>
  </div>
</template>

<script type="text/babel">
  export default {
    name: '',
    data () {
      return {
        login: '',
        password: ''
      }
    },

    methods: {
      register () {
        console.log('login')
      }
    }

  }
</script>

<style scoped>
</style>
