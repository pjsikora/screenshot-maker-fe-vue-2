var api = 'http://localhost:8888/api/'
var token = '&token=' + window.localStorage.getItem('token')

var Services = {
  // url: 'http://localhost:8888/api/',

  login: function (_this, login, password) {
    return _this.$http.get(api + 'authenticate?name=' + login + '&password=' + password)
  },
  register: function (_this, login, password) {
    return _this.$http.get(api + 'register?name=' + login + '&password=' + password)
  },

  screenshotsList: function (_this) {
    return _this.$http.get(api + 'screenshot/list' + token())
  },
  screenshotsListOfProject: function (_this) { },
  projectsList: function (_this) { },
  project: function (_this) { },
  screenshot: function (_this) { },

  projectCreate: function (_this, name) {
    return _this.$http.get(api + 'project/create?name=' + name + token)
  },

  gatherLinks: function (_this, url) {
    console.log(url)
    return _this.$http.get(api + 'validation/getlinks?url=' + url + token)
  }
}

export default Services
