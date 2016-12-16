<template lang="jade">
  div
    h1 Project list
    router-link(to="/project/form/", class="button") Add project

    .medium-12.row(v-for="item in projects")
      .medium-6.columns
        router-link(v-bind:to='"/project/single/"+item._id') {{item.name}}
      .medium-6.columns
        .button.tiny Hide/Resolve
        .button.tiny.alert Remove
</template>

<script type="text/babel">
  export default {
    name: '',
    data () {
      return {
        projects: {}
      }
    },

    methods: {
      getProjects () {
        console.log('getProjects')

        this.$http.get('http://localhost:8888/api/project/list?token=' + window.localStorage.getItem('token')).then(response => {
          console.log(response)
          this.projects = response.body
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
