<template>
  <div class="">
    <h1>Screenshot form</h1>

    <div v-if="isForm">
      <form action="">
        <label for="">
          URL's (newline separated)
          <textarea placeholder="URL's" v-model="urls">
        </label>
        <label for="">
          <input type="text" placeholder="" v-model="projectID">
        </label>
        <label for="">Platform
          <select multiple name="" id="" v-model="viewport">
            <option value="1440">Desktop</option>
            <option value="480">iPhone 6 plus</option>
            <option value="420">iPhone 6</option>
            <option value="320">iPhone 5 portrait</option>
            <option value="">iPhone 5 landscape</option>
          </select>
        </label>
        <a class="button" v-on:click="makeScreenshot()">Make screenshot</a>
      </form>
    </div>

    <div v-if="isComplete">
      <div>Complete</div>
      <a class="button" v-on:click="restartForm()">Go back to screenshot form</a>
    </div>

    <div v-if="isError">
      <div>Error</div>
      <p>{{errorMSG}}</p>
      <a class="button" v-on:click="restartForm()">Go back to screenshot form</a>
    </div>

    <div v-if="isProgress">
      Progress
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: '',

    props: {

    },

    data () {
      return {
        urls: 'fedojo.com \n google.com',
        projectID: '',

        errorMSG: '',

        isForm: true,
        isProgress: false,
        isComplete: false,
        isError: false,
        viewport: []
      }
    },

    methods: {
      makeScreenshot () {
        this.isForm = false
        this.isProgress = true

        var arrayOfURLs = this.urls.split(/\r?\n/)
        console.log(arrayOfURLs)
        console.log(this.viewport)

        arrayOfURLs.forEach(el => {
          var url = el
          this.viewport.forEach(el => {
            console.log(url + ' ' + el)
          })
        })

        let currentURL = 'http://localhost:8888/api/screenshot/create?url=' + this.urls + '&projectID=' + this.projectID + '&token=' + window.localStorage.getItem('token')
        console.log('Screenshot')

        this.$http.get(currentURL).then((response) => {
          console.log(response)

          if (response.body.status === 'ERROR') {
            console.log('ERROR')
            this.isError = true
            this.isProgress = false
          } else {
            this.isForm = false
            this.isProgress = false
            this.isComplete = true
          }
        })
      },

      validate () {

      },

      restartForm () {
        this.isForm = true
        this.isProgress = false
        this.isComplete = false
        this.isError = false
      }
    },

    beforeCreate () {
      console.log('before create')
    },

    created () {
      console.log('created')
      console.log(this.$route.params)
      console.log(this.$route.params.page_id)

      this.projectID = this.$route.params.projectID
    }
  }
</script>

<style scoped>
</style>
