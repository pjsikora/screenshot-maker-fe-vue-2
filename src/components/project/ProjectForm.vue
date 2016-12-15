<template>
  <div class="">
    <h1>Project form</h1>
    <div v-if="form">
      <form action="">
        <label for="">
          <input type="text" placeholder="Name" v-model="name">
        </label>
        <a class="button" v-on:click="createProject()">Create project</a>
      </form>
    </div>

    <div v-if="progress">
      Progress
    </div>

    <div v-if="error">
      Error
    </div>

    <div v-if="done">
      Done
      <div class="button">Go to project</div>
    </div>


  </div>
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
