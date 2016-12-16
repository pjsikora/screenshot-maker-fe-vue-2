var Services = {
  url: 'http://localhost:8888/api/',

  screenshotsList: function (_this) {
    return _this.$http.get(Services.url + 'screenshot/list?token=' + window.localStorage.getItem('token'))
  },

  screenshotsListOfProject: function (_this) {
    
  }
}

export default Services
