// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
// import * as firebase from 'firebase'

Vue.config.productionTip = false

// const firebaseConfig = {
//   apiKey: 'AIzaSyA977BIb0nPbCggwWn-05tIRGWZVrxTXko',
//   authDomain: 'vquiz-dev.firebaseapp.com',
//   databaseURL: 'https://vquiz-dev.firebaseio.com',
//   projectId: 'vquiz-dev',
//   storageBucket: 'vquiz-dev.appspot.com',
//   messagingSenderId: '201819589775',
//   appId: '1:201819589775:web:92b7e63fe3fd012b1d74fa',
//   measurementId: 'G-Z8Q507MN6T'
// }

// firebase.initializeApp(firebaseConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
