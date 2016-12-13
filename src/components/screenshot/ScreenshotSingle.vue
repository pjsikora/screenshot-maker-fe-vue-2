<template>
  <div class="">
    <h1>Screenshot Single</h1>
    <div>
      <img src="" alt="">
      <div v-for="item in points" v-bind:style="''">d</div>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: '',
    data () {
      return {
        screenshot: {},
        points: {}
      }
    },

    methods: {
      getScreenshot () {
        this.$route.params.screenshotID
        console.log('getProjects')

        this.$http.get('http://localhost:8888/api/screenshot/list').then(response => {
          console.log(response)
          this.screenshots = response.body
        })
      }
    },

    created () {
      this.getScreenshot()
    }
  }
</script>

<style scoped>
</style>
