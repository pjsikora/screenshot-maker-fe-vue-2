<template lang="jade">
div
  h1 Screenshot list
  .medium-12(v-for="item in screenshots")
    small
      .medium-3 {{item.name}}
</template>

<script type="text/babel">
  import Services from '../../helpers/Services'

  export default {
    name: '',
    data () {
      return {
        screenshots: {}
      }
    },

    methods: {
      getProjects () {
        console.log('getProjects')
        Services.screenshotsList(this)
        //        this.$http.get('http://localhost:8888/api/screenshot/list?token=' + window.localStorage.getItem('token'))
          .then(response => {
            console.log(response)
            this.screenshots = response.body
          })
      }
    },

    created () {
      this.getProjects()
    }
  }
</script>

<style scoped>
</style>
