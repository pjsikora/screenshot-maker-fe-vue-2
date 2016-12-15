<template>
  <div class="row">
    <div class="medium-5 medium-centered columns">
      <h4>User login</h4>
      <div v-if="isForm">
        <form action="">
          <label>
            Login:
            <input type="text" placeholder="login" v-model="login">
          </label>
          <label>
            Password:
            <input type="text" placeholder="password" v-model="password">
          </label>
          <div class="button expanded" v-on:click="loginClicked()">Login</div>
        </form>
      </div>
      <div v-if="isProgress">
        Logging in...
      </div>
      <div v-if="isError">
        Error occured...
        <p>{{this.error}}</p>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: '',
    data () {
      return {
        login: 'piotr',
        password: 'admin',

        isForm: true,
        isProgress: false,
        isComplete: false,
        isError: false,

        error: ''
      }
    },

    methods: {
      loginClicked () {
        this.isForm = false
        this.isProgress = true

        this.$http.get('http://localhost:8888/api/authenticate?name=' + this.login + '&password=' + this.password).then(response => {
          console.log(response)

          if (response.body.success) {
            this.isProgress = false
            this.isForm = true

            window.localStorage.setItem('token', response.body.token)
            window.localStorage.setItem('userID', response.body.userID)
            this.$router.replace('/project/list')
          } else {
            this.isError = true
            this.error = response.body.message
          }
        })
      }
    }

  }
</script>

<style scoped>
</style>
