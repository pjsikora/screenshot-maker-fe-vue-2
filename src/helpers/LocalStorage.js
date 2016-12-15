/* globals localStorage */
class LocalStorage {
  static g(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  static s(key, value) {
    return JSON.stringify(localStorage.setItem(key, value));
  }
}

export default LocalStorage;
