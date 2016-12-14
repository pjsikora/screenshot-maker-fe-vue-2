<template>
  <div class="">
    <h1>Project list</h1>
    <router-link to="/project/form/" class="button">Add project</router-link>
    <div class="medium-12" v-for="item in projects">
      <router-link v-bind:to='"/project/single/"+ item._id'>{{item.name}}</router-link>
    </div>
  </div>
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

        this.$http.get('http://localhost:8888/api/project/list').then(response => {
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
