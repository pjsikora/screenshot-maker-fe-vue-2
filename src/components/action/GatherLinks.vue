<template lang="jade">
div
  .medium-12
    h1 Gather links
    div(v-if="v.form")
      form
        input(type="text", v-model="url")
        .button(v-on:click="validate()") Validate
    
    div(v-if="v.progress")
      p In progress
    
    div(v-if="v.error")
      p Error

    div(v-if="v.done")
      p Validation

      .validation(v-for="item in validation")
        p.small {{item.message}}
        p Line {{item.lastLine}}

</template>

<script type="text/babel">
  export default {
    name: '',

    data () {
      return {
        url: 'http://fedojo.com',
        v: {
          form: true,
          progress: false,
          error: false,
          done: false
        },
        links: []
      }
    },

    methods: {
      validate () {
        this.v.form = false
        this.v.progress = true

        this.$http.get('http://localhost:8888/api/validation/getlinks?url=' + this.url).then(response => {
          console.log(response)
          this.v.progress = false
          this.v.done = true

          this.validation = response.body.messages
        })
      }
    },

    created () {
      console.log('HTMLValidate')
    }
  }
</script>

<style scoped>
  .validation {
    border-bottom: 1px solid #000;
  }
</style>
