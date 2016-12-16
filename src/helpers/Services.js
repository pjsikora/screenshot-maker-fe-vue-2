import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

var Services = {
  url: 'http://localhost:8888/api/',

  screenshotsList: function (_this) {
    return _this.$http.get(Services.url + 'screenshot/list?token=' + window.localStorage.getItem('token'))
  },

  screenshotsListOfProject: function (_this) { },
  projectsList: function (_this) { },
  project: function (_this) { },
  screenshot: function (_this) { }
}

export default Services
