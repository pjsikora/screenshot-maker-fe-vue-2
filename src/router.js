
// // import {Auth} from './helpers/Auth'
import {Login, Register, Profile} from './components/user'
import {ProjectForm, ProjectSingle, ProjectList} from './components/project'
import {ScreenshotForm, ScreenshotList, ScreenshotSingle} from './components/screenshot'
import {PointForm} from './components/point'
import {HTMLValidator, SEOChecks, GatherLinks} from './components/action'

function requireAuth (to, from, next) {
  if (window.localStorage.getItem('token') != null) {
    next()
  } else {
    next({
      path: '/login'
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

  // Point routes
  {path: '/point/add/:screenshotID/:x/:y', component: PointForm, beforeEnter: requireAuth},

  // Action routes
  {path: '/validate/html', component: HTMLValidator},
  {path: '/validate/seo', component: SEOChecks},
  {path: '/validate/gatherlinks', component: GatherLinks}
]

const router = new VueRouter({
  routes: routes
})

export default AppRouter