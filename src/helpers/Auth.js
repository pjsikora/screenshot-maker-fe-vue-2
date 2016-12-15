var Auth = {
  logout: function () {
    delete window.localStorage.token;
    delete window.localStorage.userID;
  }
}

export default Auth
