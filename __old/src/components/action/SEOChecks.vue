<template lang="jade">
div
  .medium-12
    h1 SEO Checks 
    div(v-if="v.form")
      form
        input(type="text", v-model="url")
        .button(v-on:click="validate()") Validate
    
    div(v-if="v.progress")
      p In progress
    
    div(v-if="v.error")
      p Error

    div(v-if="v.done")
      p Report
      div.button(v-on:click="gotoForm()") Go to form

      h2 Meta 
      .validation(v-for="item in meta").row
        .medium-6.columns {{item.name}}
        .medium-6.columns {{item.content}}

      h2 Images 
      .validation.row
        .medium-6.columns 
          strong src
        .medium-6.columns 
          strong alt
      .validation(v-for="item in images").row
        .medium-6.columns 
          small 
            a(v-bind:href="item.source") {{item.source}}
        .medium-6.columns 
          small {{item.alt}}

      h2 Title 
      .validation(v-for="item in title").row
        .medium-6.columns {{item.content}}

      h2 Keywords 
      .validation(v-for="item in title").row
        .medium-6.columns {{item.name}}
        .medium-6.columns {{item.content}}

      h2 Links
      .validation(v-for="item in links").row
        .medium-6.columns {{item.name}}
        .medium-6.columns {{item.content}}

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
        links: [],
        meta: [],
        validation: [],
        keywords: [],
        images: []
      }
    },

    methods: {
      validate () {
        this.v.form = false
        this.v.progress = true

        this.$http.get('http://localhost:8888/api/validation/seo?url=' + this.url).then(response => {
          console.log(response)
          this.v.progress = false
          this.v.done = true
          this.meta = response.body.body.meta
          this.links = response.body.body.links
          this.images = response.body.body.images
        })
      },

      gotoForm () {
        this.v.form = true
        this.v.done = false
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
  small {
    word-break: break-all
  }
</style>
