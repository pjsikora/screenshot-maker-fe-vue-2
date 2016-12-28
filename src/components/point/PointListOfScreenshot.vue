<template lang="jade">
  div
    h1 List {{screenshotId}}
    ul
      li(v-for="item in points")
    
</template>

<script type="text/babel">
  export default {
    name: '',
    props: ['screenshotId'],
    data () {
      return {
        screenshotID: this.screenshotId,
        points: {}
      }
    },

    methods: {
      showAddPointWindow (e) {
        console.log('show')
        this.isWindow = true
        this.isImage = false

        var ct = e.currentTarget
        var pointX = e.offsetX / ct.offsetWidth
        var pointY = e.offsetY / ct.offsetHeight

        this.currentPoint.x = pointX
        this.currentPoint.y = pointY
      }
    },

    created () {

    }
  }
</script>

<style scoped>
</style>
