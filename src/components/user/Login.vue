<template lang="jade">
.row
  .medium-5.medium-centered.columns
    h4 User login
    div(v-if='isForm')
      form
        label Login
          input(type="text", placeholder="login", v-model="login")
        label Password
          input(type="text", placeholder="password", v-model="password")
        .button.expanded(v-on:click="loginClicked()") Login
    div(v-if='isProgress')
      p Logging in
    div(v-if='isError')
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

        isForm: true,
        isProgress: false,
        isComplete: false,
        isError: false,

        error: ''
      }
    },
    created () {
      ls.s('token', 'dd')
    },

    methods: {
      loginClicked () {
        this.isForm = false
        this.isProgress = true

        Services.login(this, this.login, this.password).then(response => {
          console.log(response)

          if (response.body.success === true) {
            this.isProgress = false
            this.isForm = true

            ls.s('token', response.body.token)
            ls.s('userID', response.body.userID)

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
