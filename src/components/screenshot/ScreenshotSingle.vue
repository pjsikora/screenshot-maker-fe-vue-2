<template>
  <div class="">
    <h1>Screenshot Single</h1>
    <div v-if="isImage">
      <div v-on:click="showAddPointWindow($event)" class="pointsKeeper">
        <div class="point" v-for="item in points" v-bind:style="{ left: item.x + '%', top: item.y + '%' }"></div>
        <img v-bind:src='"http://localhost:8888/api/screenshot/file"+restOfURL' alt="">
        {{file}}
        <div v-for="item in points" v-bind:style="''">d</div>
      </div>
    </div>

    <div v-if="isWindow">
      <div class="row">
        <div class="medium-6 medium-centered columns">
          <label for="">
            Name
            <input type="text" placeholder="name">
          </label>
          <label for="">
            Description
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </label>

          <div class="row">
            <div class="medium-6 columns">
              <div class="button expanded">Add</div>
            </div>
            <div class="medium-6 columns">
              <div class="button expanded alert" v-on:click="cancel()">Cancel</div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: '',
    data () {
      return {
        screenshot: {},
        points: [],
        file: '',
        restOfURL: '',

        isImage: true,
        isWindow: false
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

      showAddPointWindow (e) {
        console.log('show')
        this.isWindow = true
        this.isImage = false

        var ct = e.currentTarget
        var pointX = e.offsetX / ct.offsetWidth
        var pointY = e.offsetY / ct.offsetHeight

        this.points.push({x: pointX * 100, y: pointY * 100})
      },

      cancel () {
        this.isWindow = false
        setTimeout(function () {
          this.isImage = true
          console.log('cancel')
        }, 100)
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
