<template>
  <div class="row">
    <div class="medium-5 medium-centered columns">
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
        <div class="button expanded" v-on:click="register()">Register</div>
      </form>
    </div>
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
