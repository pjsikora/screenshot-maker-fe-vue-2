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

    <div v-if="isComplete">
      <div>Complete</div>
      <a class="button" v-on:click="restartForm()">Go back to screenshot form</a>
    </div>

    <div v-if="isError">
      <div>Error</div>
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
    data () {
      return {
        urls: 'fedojo.com',
        projectID: '',

        isForm: true,
        isProgress: false,
        isComplete: false,
        isError: false
      }
    },

    methods: {
      makeScreenshot () {
        this.isForm = false
        this.isProgress = true

        let currentURL = 'http://localhost:8888/api/screenshot/create?url=' + this.urls + '&projectID=' + this.projectID
        console.log('Screenshot')
        console.log(currentURL)

        this.$http.get(currentURL).then((response) => {
          console.log(response)

          this.isForm = false
          this.isProgress = false
          this.isComplete = true
        })
      },

      restartForm () {
        this.isForm = true
        this.isProgress = false
        this.isComplete = false
        this.isError = false
      }
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
