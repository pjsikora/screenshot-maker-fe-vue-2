<template lang="jade">
  div
    h1 Screenshot Single
    .pointsKeeper(v-on:click="showAddPointWindow($event)")
      .point(v-for="item in points", v-bind:style="{ left: item.x + '%', top: item.y + '%' }")
      img(v-bind:src='"http://localhost:8888/api/screenshot/file"+restOfURL')
    point-list-of-screenshot(:screenshot-id='screenshotID')
</template>

<script type="text/babel">
  import PointListOfScreenshot from '../point/PointListOfScreenshot'

  export default {
    name: '',
    components: {PointListOfScreenshot},
    data () {
      return {
        screenshotID: '',
        screenshot: {},
        points: [],
        file: '',
        restOfURL: '',
        currentPoint: {
          name: '',
          description: '',
          x: 0,
          y: 0
        }
      }
    },

    methods: {
      getScreenshot () {
        this.screenshotID = this.$route.params.screenshotID

        this.restOfURL = '?_id=' + this.screenshotID + '&token=' + window.localStorage.getItem('token')
      },

      getPoints () {
        console.log('getPoints')
      },

      showAddPointWindow (e) {
        var ct = e.currentTarget
        var pointX = e.offsetX / ct.offsetWidth
        var pointY = e.offsetY / ct.offsetHeight

        this.$router.replace('/point/add/' + this.screenshotID + '/' + pointX + '/' + pointY)
      }
    },

    created () {
      this.getScreenshot()
      this.getPoints()
    }
  }
</script>

<style scoped>
  .point {
    width: 8px;
    height: 8px;
    background: red;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
    z-index: 5;
  }

  .pointsKeeper {
    position: relative;
  }

  .pointsKeeper img {
    width: 100%;
  }
</style>
