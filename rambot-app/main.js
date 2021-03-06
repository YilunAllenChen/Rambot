// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 900,
    webPreferences: {
      //preload: path.join(__dirname, 'preload.js')
      webSecurity: false
    }
  })

  mainWindow.loadURL('file://'+__dirname+'/build/index.html')


  mainWindow.on('closed', function () {
    mainWindow = null
  })
}
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})
