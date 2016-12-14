// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import {auth} from './helpers/Auth'
import {Login, Register, Profile} from './components/user'
import {ProjectForm, ProjectSingle, ProjectList} from './components/project'
import {ScreenshotForm, ScreenshotList} from './components/screenshot'

Vue.use(VueRouter)
Vue.use(VueResource)

function requireAuth (to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

const routes = [
  // User routes
  {path: '/login', component: Login},
  {path: '/register', component: Register},
  {path: '/profile', component: Profile, beforeEnter: requireAuth},

  // Project routes
  {path: '/project/form', component: ProjectForm},
  {path: '/project/list', component: ProjectList},
  {path: '/project/single', component: ProjectSingle},
  {path: '/project/single/:page_id', component: ProjectSingle},

  // Screenshot routes
  {path: '/screenshot/form/:projectID', component: ScreenshotForm},
  {path: '/screenshot/list', component: ScreenshotList},
  {path: '/screenshot/single/:screenshotID', component: ScreenshotList}
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: {App}
})
