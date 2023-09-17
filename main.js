const {app, BrowserWindow, globalShortcut} = require('electron');


let window = null;

function createWindow() {

  window = new BrowserWindow({
    width: 800,
    height: 800,
    frame: false,
    show: true,
    skipTaskbar: true,
    transparent: true,
    webSecurity: false,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  window.loadFile('dist/pepperkey/index.html');
  window.webContents.openDevTools()
}


app.whenReady().then(() => {
  createWindow();


  const ret = globalShortcut.register('Tab', () => {


    window.webContents.send("OPEN");
    window.show();
  });

  globalShortcut.register('esc', () => {
    window.hide();
    window.webContents.send("CLOSE");
  });


  if (!ret) {
    console.log('registration failed')
  }


  // Check whether a shortcut is registered.
  console.log(globalShortcut.isRegistered('^'))


});


app.on('will-quit', () => {
  // Unregister all shortcuts.
  globalShortcut.unregisterAll()
})
