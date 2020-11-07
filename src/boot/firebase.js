import firebase from "firebase/app"

import "firebase/auth"
import "firebase/database"

var firebaseConfig = {
  apiKey: "AIzaSyDHz1EAs984yYvE1QGqEKtOiZAc-S4fwgY",
  authDomain: "buddy-feaba.firebaseapp.com",
  databaseURL: "https://buddy-feaba.firebaseio.com",
  projectId: "buddy-feaba",
  storageBucket: "buddy-feaba.appspot.com",
  messagingSenderId: "273326931921",
  appId: "1:273326931921:web:1a7585cf9c8211c71aaaf0"
}

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }
