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
    <ul>
      <li v-for="item in screenshots"></li>
    </ul>
  </div>
</template>

<script type="text/babel">
  export default {
    name: '',
    data () {
      return {
        pageID: '',
        project: {},
        screenshots: {}
      }
    },

    methods: {
      getProject () {
        this.$http.get('http://localhost:8888/api/project/read?_id=' + this.pageID).then(response => {
          console.log(response)
          this.project = response.body
        })
      },
      getScreenshots () {
//        this.$http.get('http://localhost:8888/api/screenshots/').then(response => {
//          console.log(response)
//          this.screenshots = response.body
//        })
      }
    },

    created () {
      console.log(this.$route.params)
      console.log(this.$route.params.page_id)
      this.pageID = this.$route.params.page_id
      this.getProject()
      this.getScreenshots()
    }
  }
</script>

<style scoped>
</style>
