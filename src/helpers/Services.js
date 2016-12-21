var api = 'http://localhost:8888/api/'
var _token = window.localStorage.getItem('token')
var token = '&token=' + window.localStorage.getItem('token')
var user = '&userID=' + window.localStorage.getItem('userID')

var Services = {
  // url: 'http://localhost:8888/api/',
  login: function (_this, login, password) {
    return _this.$http.get(api + 'authenticate?name=' + login + '&password=' + password)
  },
  register: function (_this, login, password) {
    return _this.$http.get(api + 'register?name=' + login + '&password=' + password)
  },

  screenshotsList: function (_this) {
    return _this.$http.get(api + 'screenshot/list' + token)
  },
  screenshotsListOfProject: function (_this) {
    return _this.$http.get(api + 'project/read?_id=' + _this.projectID + token)
  },
  projectsList: function (_this) {
    return _this.$http.get('http://localhost:8888/api/project/list' + '?token=' + _token)
  },
  projectSingle: function (_this) { },
  screenshot: function (_this) { },

  projectCreate: function (_this) {
    return _this.$http.get(api + 'project/create?name=' + _this.name + token + user)
  },

  gatherLinks: function (_this, url) {
    console.log(url)
    return _this.$http.get(api + 'validation/getlinks?url=' + url + token)
  }
}

export default Services
