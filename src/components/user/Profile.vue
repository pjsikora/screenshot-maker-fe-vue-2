<template lang="jade">
div
  h1 User profile
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
      loginClicked () {
        console.log('login')
      }
    },

    beforeCreate () {
      console.log('before create')
      /* eslint no-undef: "error" */
      if (window.localStorage.getItem('token') == null) {
        this.$router.replace('/login')
      }
    },

    created () {
      console.log('ding')
    }
  }
</script>

<style scoped>
</style>
