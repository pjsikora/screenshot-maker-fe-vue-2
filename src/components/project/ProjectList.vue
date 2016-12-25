<template lang="jade">
  div
    div(v-if='v.preload')
      p Preload
    
    div(v-if='v.created')
      h1 Project list
      router-link(to="/project/form/", class="button") Add project

      .medium-12.row
        .medium-2.columns 
          small
            strong Name
        .medium-3.columns 
          small
            strong Created by
        .medium-1.columns 
          small
            strong open
        .medium-1.columns 
          small
            strong deleted
        .medium-3.columns
          small 
            strong Actions

      .medium-12.row(v-for="item in projects")
        .medium-2.columns.name
          router-link(v-bind:to='"/project/single/"+item._id') 
            small {{item.name}}
        .medium-3.columns.createdBy
          p
            small {{item.createdBy}}
        .medium-1.columns.isOpened
          p
            small {{item.isOpened}}
        .medium-1.columns.isDeleted
          p
            small {{item.isDeleted}}
        .medium-3.columns.actions
          span(v-if='item.isOpened')
            .button.tiny(v-on:click='closeItem(item._id)') Close
          span(v-if='!item.isOpened')
            .button.tiny(v-on:click='openItem(item._id)') Open

          span(v-if='!item.isDeleted')
            .button.tiny.warning(v-on:click='removeItem(item._id)') Remove
          span(v-if='item.isDeleted')
            .button.tiny.warning(v-on:click='revertItem(item._id)') Revert

          .button.tiny.alert(v-on:click='removeHard(item._id)') Remove!

    div(v-if='v.modal')
      p Are you sure want to {{actionDescription}} item?
      .button(v-on:click='confirmAction()') Yes
      .button(v-on:click='cancelAction()') No

</template>

<script type="text/babel">
  // import Auth from '../../helpers/Auth'
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
              console.log('ding')
            }
          }
        })
      },

      closeItem (id) {
        this.v.created = false
        this.v.modal = true
        this.actionDescription = 'close'
        this.action = 'close'
        this.selectedItem = id
      },

      openItem (id) {
        this.v.created = false
        this.v.modal = true
        this.actionDescription = 'open'
        this.action = 'open'
        this.selectedItem = id
      },

      removeItem (id) {
        this.v.created = false
        this.v.modal = true
        this.actionDescription = 'delete'
        this.action = 'delete'
        this.selectedItem = id
      },

      revertItem (id) {
        this.v.created = false
        this.v.modal = true
        this.actionDescription = 'revert'
        this.action = 'revert'
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
        if (this.action === 'close') {
          console.log('close' + this.selectedItem)
        } else if (this.action === 'open') {
          console.log('open' + this.selectedItem)
        } else if (this.action === 'delete') {
          console.log('delete' + this.selectedItem)
        } else if (this.action === 'revert') {
          console.log('revert' + this.selectedItem)
        } else if (this.action === 'hardDelete') {
          console.log('hardDelete' + this.selectedItem)
          Services.projectHardDelete(this.selectedItem).then(r => {
            console.log(r)
          })
        }
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
