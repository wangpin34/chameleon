const { autoUpdater } = require('electron-auto-updater')

const start = () => {
	//Do not call setFeedURL on Windows. electron-builder automatically creates app-update.yml file for you on build in the resources
	//autoUpdater.setFeedURL(target)

	autoUpdater.checkForUpdates().then((result) => {
		console.log('check for update result: ' + result) 
	})

	autoUpdater.on('checking-for-update', () => {
		console.log('checking-for-update')
	})

	autoUpdater.on('update-available', () => {
		console.log('update-available')
	})

	autoUpdater.on('update-not-available', () => {
		console.warn('update-not-available')
	})

	autoUpdater.on('update-downloaded', () => {
		autoUpdater.quitAndInstall()
	})

	autoUpdater.on('error', (error) => {
		console.error('error happened')
		console.error(error)
	})

}

module.exports = {
	start
}

