const {autoUpdater} = require('electron')

const target = ''

const start = () => {
	autoUpdater.setFeedURI(target)

	autoUpdater.checkForUpdates()

	autoUpdater.on('update-downloaded', () => {
		autoUpdater.quitAndInstall()
	})
}

module.exports = {
	start
}

