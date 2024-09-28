<template lang="jade">
.row
  .medium-5.medium-centered.columns
    h4 User login
    div(v-if='v.form')
      form
        label Login
          input(type="text", placeholder="login", v-model="login")
        label Password
          input(type="text", placeholder="password", v-model="password")
        .button.expanded(v-on:click="loginClicked()") Login
    div(v-if='v.rogress')
      p Logging in
    div(v-if='v.error')
      p Error occured...
      p {{this.error}}
</template>

<script type="text/babel">
  import ls from '../../helpers/LocalStorage'
  import Services from '../../helpers/Services'

  export default {
    name: '',
    data () {
      return {
        login: 'piotr',
        password: 'admin',

        v: {
          form: true,
          progress: false,
          complete: false,
          error: false
        },

        error: ''
      }
    },
    created () {
      // ls.s('token', 'dd')
    },

    methods: {
      loginClicked () {
        var _self = this
        this.v.form = false
        this.v.progress = true

        Services.login(this, this.login, this.password).then(response => {
          console.log(response)

          if (response.body.success === true) {
            this.v.Progress = false
            this.v.Form = true

            ls.s('token', response.body.token)
            ls.s('userID', response.body.userID)

            setTimeout(function () {
              _self.$router.replace('/project/list')
            }, 500)
          } else {
            this.v.error = true
            this.error = response.body.message
          }
        })
      }
    }

  }
</script>

<style scoped>
</style>