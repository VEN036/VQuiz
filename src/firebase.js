import Vue from 'vue'
import * as firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: 'AIzaSyA977BIb0nPbCggwWn-05tIRGWZVrxTXko',
  authDomain: 'vquiz-dev.firebaseapp.com',
  databaseURL: 'https://vquiz-dev.firebaseio.com',
  projectId: 'vquiz-dev',
  storageBucket: 'vquiz-dev.appspot.com',
  messagingSenderId: '201819589775',
  appId: '1:201819589775:web:92b7e63fe3fd012b1d74fa',
  measurementId: 'G-Z8Q507MN6T'
}

firebase.initializeApp(firebaseConfig)
