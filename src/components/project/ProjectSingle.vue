<template>
  <div class="">
    <h1>Project single</h1>
    <p><strong>_id: </strong>{{project._id}}</p>
    <p><strong>_v: </strong>{{project._v}}</p>
    <p><strong>name: </strong>{{project.name}}</p>
    <p><strong>createdBy: </strong>{{project.createdBy}}</p>
    <p><strong>isDeleted: </strong>{{project.isDeleted}}</p>
    <p><strong>isOpened: </strong>{{project.isOpened}}</p>
    <p><strong>createDate: </strong>{{project.createDate}}</p>

    <h2>Screenshots</h2>
    <a class="button" v-on:click="addScreenshot()">Add screenshot</a>
    <a class="button" v-on:click="addScreenshot()">HTML validation</a>
    <a class="button" v-on:click="addScreenshot()">CSS validation</a>
    <a class="button" v-on:click="addScreenshot()">A11t validation</a>

    <div v-for="item in screenshots">
      <small>
        <router-link v-bind:to='"/screenshot/single/"+ item._id'>{{item.name}}</router-link>
        {{item.createDate}}
      </small>
    </div>

  </div>
</template>

<script type="text/babel">
  export default {
    name: '',
    data () {
      return {
        projectID: '',
        project: {},
        screenshots: {}
      }
    },

    methods: {
      getProject () {
        this.$http.get('http://localhost:8888/api/project/read?_id=' + this.projectID + '&token=' + window.localStorage.getItem('token')).then(response => {
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

      getScreenshots () {
        this.$http.get('http://localhost:8888/api/screenshot/read?projectID=' + this.projectID + '&token=' + window.localStorage.getItem('token')).then(response => {
          console.log(response)
          this.screenshots = response.body
        })
      },

      addScreenshot () {
        this.$router.replace('/screenshot/form/' + this.projectID)
      }
    },

    created () {
      this.projectID = this.$route.params.page_id
      this.getProject()
      this.getScreenshots()
    }
  }
</script>

<style scoped>
</style>
