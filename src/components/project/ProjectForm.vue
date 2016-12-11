<template>
  <div class="">
    <h1>Project form</h1>
    <form action="">
      <label for="">
        <input type="text" placeholder="Name" v-model="name">
      </label>
      <a class="button" v-on:click="createProject()">Create project</a>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'project-form',

    data () {
      return {
        name: ''
      }
    },

    methods: {
      createProject: function () {
        console.log('create projet')
        console.log(this.name)
      }
    }
  }
</script>

<style scoped>
</style>
