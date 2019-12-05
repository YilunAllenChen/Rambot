# Rambot
Rambot aims to build a robotics ecosystem that makes prototyping faster than ever.

# Rambot-app-backend
Rambot's desktop app is powered by electron.js.
under the Rambot-app-backend directory, do:
```
npm install
```
to install all dependencies. Do: 
```
npm start
```
to start electron.

Rambot loads the index.html file under its UI_build directory as its content.

***Note: if npm doesn't work try it with cnpm.***

# Rambot-app-frontend
Rambot's UI is powered by react.js/vue.js. Under the Rambot-app-backend directory, do:
```
npm install
```
to install dependencies and:
```bash
#react
yarn start

#vue
yarn serve
```
under respective directory to start development server. 


If you wish to update your frontend to the backend, do:
```
yarn build
```
then copy all files under build files and put them into backend/'s UI_build folder.
# Project Log
 Date | Type | Details 
- | - | -
2019.12.4 | DEV | Architected the framework of the project. <br> - Backend powered by Electron.js <br> - Frontend powered by React.js / Vue.js
2019.12.4 | DEV | Configed starter code <br> - React scaffold from my Flamongo project <br> - vue.js from vue-cli.

