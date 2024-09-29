<template>
  <div class="">
    <div class="medium-12" v-for="item in screenshots">
      <small>
        <div class="medium-3">{{item.name}}</div>
      </small>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: '',
    data () {
      return {
        screenshots: {}
      }
    },

    methods: {
      getProjects () {
        console.log('getProjects')

        this.$http.get('http://localhost:8888/api/screenshot/list?token=' + window.localStorage.getItem('token')).then(response => {
          console.log(response)
          this.screenshots = response.body
        })
      }
    },

    created () {
      this.getProjects()
    }
  }
</script>

<style scoped>
</style>
