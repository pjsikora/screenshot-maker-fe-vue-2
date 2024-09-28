<template lang="jade">
.row
  .medium-6.medium-centered.columns
    label Name
      input(type='text', placeholder='name', v-model='point.name')    
    label Description
      textarea(v-model='point.description')
    .row 
      .medium-6.columns
        .button.expanded(v-on:click='addPoint()') Add
      .medium-6.columns
        .button.expanded.alert(v-on:click='cancel()') Cancel
</template>

<script type="text/babel">
  export default {
    name: '',
    data () {
      return {
        screenshotID: '',
        point: {
          name: '',
          description: '',
          x: 0,
          y: 0
        }
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
      },

      cancel () {
        console.log('cancel')
      },

      addPoint () {
        console.log('add Point')
        console.log(this.currentPoint.name)
        console.log(this.currentPoint.description)
        console.log(this.currentPoint.x * 100)
        console.log(this.currentPoint.y * 100)
      }
    },

    created () {
      this.screenshotID = this.$route.params.screenshotID
      this.x = this.$route.params.x
      this.y = this.$route.params.y
    }
  }
</script>

<style scoped>
</style>
