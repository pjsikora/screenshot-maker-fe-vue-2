<template lang="jade">
div
  h1 Screenshot list of project
  .medium-12(v-for="item in screenshots")
    small
      router-link(v-bind:to='"/screenshot/single/"+ item._id') {{item.name}} 
</template>

<script type="text/babel">
  import Services from '../../helpers/Services'

  export default {
    name: '',
    props: ['projectId'],
    data () {
      return {
        projectID: this.projectId,
        screenshots: {}
      }
    },

    methods: {
      fetch () {
        Services.screenshotListOfProject(this)
        .then(response => {
          console.log(response)
          this.screenshots = response.body
        })
      }
    },

    created () {
      this.fetch()
    }
  }
</script>

<style scoped>
</style>
