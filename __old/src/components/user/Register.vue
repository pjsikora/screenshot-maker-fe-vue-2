<template lang="jade">
.row
  .medium-5.medium-centered.columns
    h1 User register
    form(v-if="v.form")
      label Login:
        input(type="text", placeholder="login", v-model="login")
      label Password:
        input(type="text", placeholder="login", v-model="password")
      label Password retype:
        input(type="text", placeholder="login", v-model="password_retype")
      .button.expanded(v-on:click="register()") Register
    div(v-if="v.error")
      p(v-for="item in errors") {{item}}

</template>

<script type="text/babel">
  export default {
    name: '',
    data () {
      return {
        login: '',
        password: '',
        password_retype: '',
        errors: [],

        v: {
          form: true,
          progress: false,

          error: false
        }
      }
    },

    methods: {
      register () {
        // this.v.progress = true

        if (this.password !== this.password_retype) {
          this.v.error = true
          this.errors.push('Passwords arent equal')
        }
        if (this.password === '') {
          this.v.error = true
          this.errors.push('Passwords cant be null')
        }
        if (this.login === '') {
          this.v.error = true
          this.errors.push('Login cant be null')
        }
        console.log('login')
      }
    }

  }
</script>

<style scoped>
</style>
