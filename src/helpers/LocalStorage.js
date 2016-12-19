/* globals localStorage */
var LocalStorage = {
  g: function (key) {
    return JSON.parse(localStorage.getItem(key))
  },

  s: function (key, value) {
    return JSON.stringify(localStorage.setItem(key, value))
  }
}

export default LocalStorage
