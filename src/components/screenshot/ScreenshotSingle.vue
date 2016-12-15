<template>
  <div class="">
    <h1>Screenshot Single</h1>
    <div v-on:click="addPoint($event)">
      <img v-bind:src='"http://localhost:8888/api/screenshot/file"+restOfURL' alt="">
      {{file}}
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
        points: {},
        file: '',
        restOfURL: ''
      }
    },

    methods: {
      getScreenshot () {
        var screenshotID = this.$route.params.screenshotID

        this.restOfURL = '?_id=' + screenshotID + '&token=' + window.localStorage.getItem('token')
      },

      getPoints () {
        console.log('getPoints')
      },

      addPoint (e) {
        console.log('Add point')
        console.log(e.offsetX)
        console.log(e.offsetY)
        console.log(e.currentTarget.offsetWidth)
        console.log(e.currentTarget.offsetHeight)
      }
    },

    created () {
      this.getScreenshot()
      this.getPoints()
    }
  }
</script>

<style scoped>
</style>
