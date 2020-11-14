import vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/firebase-auth'
import * as firebaseui from 'firebaseui'

const firebaseConfig = {
apiKey: process.env.VUE_APP_FIREBapiKey,
authDomain: process.env.VUE_APP_FIREBASE_authDomain,
databaseURL:process.env.VUE_APP_FIREBASE_databaseURL,
projectId:process.env.VUE_APP_FIREBASE_projectId,
storageBucket: process.env.VUE_APP_FIREBASE_storageBucket,
messagingSenderId: process.env.VUE_APP_FIREBASE_messagingSenderId,
appId: process.env.VUE_APP_FIREBASE_appId,
}

firebase.initializeApp(firebaseConfig)
const ui = new firebaseui.auth.AuthUI(firebase.auth())
vue.prototype.$firebase = firebase
vue.prototype.$firebaseui = ui
