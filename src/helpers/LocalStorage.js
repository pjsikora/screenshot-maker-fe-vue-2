class LocalStorage {
  static g(key) {
    return JSON.parse(window.localStorage.getItem(key));
  }

  static s(key, value) {
    return JSON.stringify(window.localStorage.setItem(key, value));
  }
}

export default LocalStorage;
