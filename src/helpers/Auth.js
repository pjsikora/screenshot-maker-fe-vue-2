var Auth = {
  logout: function (this) {
    delete window.localStorage.token;
    delete window.localStorage.userID;
  }
}

export default Auth
