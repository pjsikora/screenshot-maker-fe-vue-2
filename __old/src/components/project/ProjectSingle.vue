<template lang="jade">
div
  h1 Project single
  div
    p
      strong _id: 
      span {{project._id}}
    p
      strong _v:
      span {{project.__v}}
    p
      strong name:
      span {{project.name}}
    p
      strong createdBy:
      span {{project.createdBy}}
    p
      strong isDeleted:
      span {{project.isDeleted}}
    p 
      strong isOpened:
      span {{project.isOpened}}
    p 
      strong createDate:
      span {{project.createDate}}
  h2 Screenshots
  div
    a.button(v-on:click="addScreenshot()") Add screenshot
    //- a.button(v-on:click="addScreenshot()") HTML validation
    //- a.button(v-on:click="addScreenshot()") CSS validation
    //- a.button(v-on:click="addScreenshot()") A11t validation
  screenshots-list-of-project(:project-id='projectID')
</template>

<script type="text/babel">
  import Services from '../../helpers/Services'
  import ScreenshotsListOfProject from '../screenshot/ScreenshotListOfProject'

  export default {
    name: '',
    components: {ScreenshotsListOfProject},
    data () {
      return {
        projectID: '',
        project: {}
      }
    },

    methods: {
      getProject () {
        Services.screenshotsListOfProject(this)
        .then(response => {
          if (response.body.success !== false) {
            console.log(response)
            this.project = response.body
          } else {
            console.log('No token')
            delete window.localStorage.token
            delete window.localStorage.userID
            this.$router.replace('/login ')
          }
        })
      },

      addScreenshot () {
        this.$router.replace('/screenshot/form/' + this.projectID)
      }
    },

    created () {
      this.projectID = this.$route.params.page_id
      this.getProject()
    }
  }
</script>

<style scoped>
</style>
