import Config from '../../Config'

var ScreenshotService = {
	// Screenshots
  screenshotsList: function (_this) {
    return _this.$http.get(api + 'screenshot/list' + token)
  },
  screenshotsListOfProject: function (_this, projectID) { 
    return _this.$http.get(api + 'project/read?_id=' + projectID + token)
  }
}


export default ScreenshotService