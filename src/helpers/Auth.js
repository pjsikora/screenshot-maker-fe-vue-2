var Auth = {
  logout: function (_this) {
    delete window.localStorage.token
    delete window.localStorage.userID
    _this.$router.replace('/login')
  },
  isLogged: function () {
    if (window.localStorage.token !== null && window.localStorage.userID !== null) {
      return true
    } else {
      return false
    }
  }
}

export default Auth
