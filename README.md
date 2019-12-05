# Rambot
Rambot aims to build a robotics ecosystem that makes prototyping faster than ever.

# Rambot-app
Rambot's desktop app is powered by electron.js.
under the Rambot-app-backend directory, do:
```
yarn install
```
to install all dependencies. 

Do: 
```
yarn e-start
```
to start electron.

Rambot loads its ```/build``` directory as its content.

***Note: if npm doesn't work try it with cnpm.***


Front end development: Do
```bash
#react
yarn start
```
to start a dev server.

When bundling a desktop app, copy main.js to ```/build``` and rename it to ```electron.js```, then do:
```
yarn e-build
```

# Project Log
 Date | Type | Details 
- | - | -
2019.12.4 | DEV | Architected the framework of the project. <br> - Backend powered by Electron.js <br> - Frontend powered by React.js
2019.12.4 | DEV | Configed starter code <br> - React scaffold from my Flamongo project
