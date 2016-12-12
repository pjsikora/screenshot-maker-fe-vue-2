<template>
  <div class="">
    <h1>Screenshot form</h1>
    <form action="">
      <label for="">
        URL's (newline separated)
        <textarea placeholder="URL's" v-model="urls">
      </label>
      <label for="">
        <input type="text" placeholder="" v-model="projectID">
      </label>
      <label for="">Platform
        <select multiple name="" id="">
          <option value="">Desktop</option>
          <option value="">iPhone 6 plus</option>
          <option value="">iPhone 6</option>
          <option value="">iPhone 5</option>
        </select>
      </label>
      <a class="button" v-on:click="makeScreenshot()">Make screenshot</a>
    </form>
  </div>
</template>

<script type="text/babel">
  export default {
    name: '',
    data () {
      return {
        urls: 'fedojo.com',
        projectID: '0202'
      }
    },
    methods: {
      makeScreenshot () {
        let currentURL = 'http://localhost:8888/api/screenshot/create?url=' + this.urls + '&projectID=' + this.projectID
        console.log('Screenshot')
        console.log(currentURL)
        this.$http.get(currentURL).then((response) => {
          console.log(response)
        })
      }
    }
  }
</script>

<style scoped>
</style>
