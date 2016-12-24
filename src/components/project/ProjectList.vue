<template lang="jade">
  div
    div(v-if='v.preload')
      p Preload
    
    div(v-if='v.created')
      h1 Project list
      router-link(to="/project/form/", class="button") Add project

      .medium-12.row
        .medium-2.columns 
          strong Name
        .medium-3.columns 
          strong Created by
        .medium-5.columns 
          strong Actions

      .medium-12.row(v-for="item in projects")
        .medium-2.columns
          router-link(v-bind:to='"/project/single/"+item._id') 
            small {{item.name}}
        .medium-3.columns
          small {{item.createdBy}}
        .medium-5.columns
          .button.tiny(v-on:click='resolve(item._id)') Hide/Resolve
          .button.tiny.warning(v-on:click='remove(item._id)') Remove
          .button.tiny.alert(v-on:click='removeHard(item._id)') Remove!
    div(v-if='v.modal')
      p Are you sure want to {{actionDescription}} item?
      .button(v-on:click='confirmAction()') Yes
      .button(v-on:click='cancelAction()') No
</template>

<script type="text/babel">
  import Services from '../../helpers/Services'

  export default {
    name: '',
    data () {
      return {
        v: {
          preload: true,
          created: false,
          modal: false
        },
        projects: {},
        actionDescription: '',
        action: '',
        selectedItem: ''
      }
    },

    methods: {
      getProjects () {
        console.log('getProjects')

        Services.projectsList(this)
        .then(r => {
          console.log(r)
          console.log(r.status)
          if (r.body.success) {
            this.projects = r.body.response
            this.v.preload = false
            this.v.created = true
          } else {
            if (r.body.message === 'No token' || r.body.message === 'Failed to authenticate token') {
              // Auth.logout(this)
            }
          }
        })
      },

      resolve (id) {
        this.v.created = false
        this.v.modal = true
        this.actionDescription = 'resolve'
        this.action = 'resolve'
        this.selectedItem = id
      },

      remove (id) {
        this.v.created = false
        this.v.modal = true
        this.actionDescription = 'delete'
        this.action = 'delete'
        this.selectedItem = id
      },

      removeHard (id) {
        this.v.created = false
        this.v.modal = true
        this.actionDescription = 'hard delete'
        this.action = 'hardDelete'
        this.selectedItem = id
      },

      confirmAction () {
        this.v.modal = false
        this.v.created = true
        this.action = ''
        this.selectedItem = ''
        this.actionDescription = ''
      },

      cancelAction () {
        this.v.modal = false
        this.v.created = true
        this.action = ''
        this.selectedItem = ''
        this.actionDescription = ''
      }
    },

    created () {
      this.v.preload = false
      this.v.created = true
      this.getProjects()
    }
  }
</script>

<style scoped>
</style>
