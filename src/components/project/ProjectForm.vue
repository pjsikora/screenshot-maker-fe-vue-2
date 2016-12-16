<template lang="jade">
div
  h1 Project form
  div(v-if="form")
    form
      label
        input(type="text", placeholder="Name", v-model="name")
      .button(v-on:click="createProject()") Create project
  div(v-if="progress")
    p Progress
  div(v-if="error")
    p Error
  div(v-if="done")
    p Done
    .button Go to project
</template>

<script type="text/babel">
  export default {
    name: 'project-form',

    data () {
      return {
        name: '',

        progress: false,
        error: false,
        form: true,
        done: false
      }
    },

    methods: {
      createProject: function () {
        console.log('create projet')
        console.log(this.name)

        this.form = false
        this.progress = true

        this.$http.get('http://localhost:8888/api/project/create?name=' + this.name + '&token=' + window.localStorage.getItem('token')).then(response => {
          console.log(response)

          this.form = false
          this.progress = false
          this.done = true

          this.$router.replace('/project/single/' + response.body._id)
        })
      }
    }
  }
</script>

<style scoped>
</style>
