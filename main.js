const { app, BrowserWindow, dialog } = require('electron');

function createWindow () {
  let win = new BrowserWindow({ width: 800, height: 600 });
  win.loadFile('index.html');
  win.on('close', e => {
    let options = {
      defaultId: 0,
      buttons: ['Wait', 'Cancel'],
      message: 'You have unsaved changes. Discard them?',
    };
    let choice = dialog.showMessageBox(win, options);
    if (choice == 1) {
      win.destroy();
    }
  });
}

app.on('ready', createWindow);
