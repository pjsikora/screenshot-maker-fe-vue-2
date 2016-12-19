// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

// import {Auth} from './helpers/Auth'
import {Login, Register, Profile} from './components/user'
import {ProjectForm, ProjectSingle, ProjectList} from './components/project'
import {ScreenshotForm, ScreenshotList, ScreenshotSingle} from './components/screenshot'
import {HTMLValidator, SEOChecks, GatherLinks} from './components/action'

function requireAuth (to, from, next) {
  if (window.localStorage.getItem('token') != null) {
    next()
  } else {
    next({
      path: '/login'
      // query: {redirect: to.fullPath}
    })
  }
}

const routes = [
  // User routes
  {path: '/login', component: Login},
  {path: '/register', component: Register},
  {path: '/profile', component: Profile, beforeEnter: requireAuth},

  // Project routes
  {path: '/project/form', component: ProjectForm, beforeEnter: requireAuth},
  {path: '/project/list', component: ProjectList, beforeEnter: requireAuth},
  {path: '/project/single', component: ProjectSingle, beforeEnter: requireAuth},
  {path: '/project/single/:page_id', component: ProjectSingle, beforeEnter: requireAuth},

  // Screenshot routes
  {path: '/screenshot/form/:projectID', component: ScreenshotForm, beforeEnter: requireAuth},
  {path: '/screenshot/list', component: ScreenshotList, beforeEnter: requireAuth},
  {path: '/screenshot/single/:screenshotID', component: ScreenshotSingle, beforeEnter: requireAuth},

  {path: '/validate', component: HTMLValidator},
  {path: '/seo', component: SEOChecks},
  {path: '/gather', component: GatherLinks}
]

const router = new VueRouter({
  routes: routes
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: {App}
})
