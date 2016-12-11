// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import {ProjectForm, ProjectSingle, ProjectList} from './components/project'
import {ScreenshotForm, ScreenshotList} from './components/screenshot'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  // Project routes
  {path: '/project/form', component: ProjectForm},
  {path: '/project/list', component: ProjectList},
  {path: '/project/single', component: ProjectSingle},
  {path: '/project/single/:page_id', component: ProjectSingle},

  {path: '/screenshot/form', component: ScreenshotForm},
  {path: '/screenshot/list', component: ScreenshotList}
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
