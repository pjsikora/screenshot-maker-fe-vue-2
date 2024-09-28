<template lang="jade">
div
  .medium-12
    h1 Gather links
    div(v-if="v.form")
      form
        input(type="text", v-model="url")
        .button(v-on:click="validate()") Gather links
    
    div(v-if="v.progress")
      p In progress
    
    div(v-if="v.error")
      p Error

    div(v-if="v.done")
      p Validation

      .validation(v-for="item in validation")
        p {{item}}

</template>

<script type="text/babel">
  import Services from '../../helpers/Services'

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

        Services.gatherLinks(this, this.url).then(response => {
          this.v.progress = false
          this.v.done = true
          console.log(response)
          this.validation = response.body.body
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
