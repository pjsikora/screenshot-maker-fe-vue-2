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
  import Services from '../../helpers/Services'
  import Auth from '../../helpers/Auth'

  export default {
    name: 'project-form',

    data () {
      return {
        name: '',

        progress: false,
        error: false,
        form: false,
        done: false
      }
    },

    methods: {
      createProject: function () {
        this.form = false
        this.progress = true

        Services.projectCreate(this)
        .then(response => {
          console.log(response)
          console.log(response.body)

          if (response.body.body.success) {
            this.form = false
            this.progress = false
            this.done = true

            this.$router.replace('/project/single/' + response.body._id)
          }
        })
      }
    },

    beforeCreate () {
      if (Auth.isLogged()) {
        this.form = true
      } else {
        // this.$router.replace('/login')
      }
    }
  }
</script>

<style scoped>
</style>
