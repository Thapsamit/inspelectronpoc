const electron = require("electron");
const url = require("url");
const path = require("path");
const { create } = require("domain");
const { app, BrowserWindow, Menu } = electron; // electroon usese chromium under the hood
const isDev = process.env.NODE_ENV !== "production";
const isMac = process.platform === "darwin";

function createWindow() {
  const mainWindow = new BrowserWindow({
    title: "Insp electron poc",
    width: isDev ? 1000 : 500,
    height: 800,
  });
  if (isDev) {
    mainWindow.webContents.openDevTools(); // on satrting it opens dev tools
  }
  // mainWindow.loadFile(path.join(__dirname, "./renderer/videoplayer.html"));
  mainWindow.loadURL("https://shaka-player-demo.appspot.com/");
}

function createAboutWindow() {
  const aboutWindow = new BrowserWindow({
    title: "About",
    width: isDev ? 1000 : 500,
    height: 800,
  });
  aboutWindow.loadFile(path.join(__dirname, "./renderer/about.html"));
}

// App is ready
//create main window

app.whenReady().then(() => {
  createWindow();
  // implement main menu
  const mainMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(mainMenu);
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  // mac behaves a little different therefore we quit the app when window closed
  if (!isMac) {
    app.quit();
  }
});

// Menu template
// Accelarator below is shortcut keys to invoke a menu item
// below destrcucturing means we are proviiding some  menu specifi to a paltform
// on clicking window of about it opens a new window
const menu = [
  {
    label: "File",
    submenu: [
      { label: "Quit", click: () => app.quit(), accelarator: "CmdOrCtrl+W" },
    ],
  },
  ...(!isMac
    ? [
        {
          label: app.name,
          submenu: [{ label: "About", click: () => createAboutWindow() }],
        },
      ]
    : []),

  ...(!isMac ? [{ label: app.name, submenu: [{ label: "Help" }] }] : []),
];
