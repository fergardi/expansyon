var firebase = require('firebase/app')
require('firebase/auth')
require('firebase/database')
// require('firebase/messaging')

const identifier = 'expansyon-7c4fc'

const config = {
  apiKey: 'AIzaSyATkJEmUyFcvAVUiSIPBaiTmrmyqQlep-w',
  authDomain: `${identifier}.firebaseapp.com`,
  databaseURL: `https://${identifier}.firebaseio.com`,
  projectId: `${identifier}`,
  storageBucket: `${identifier}.appspot.com`,
  messagingSenderId: '351582189055'
}

const app = firebase.initializeApp(config)

export const recaptcha = '6LfZjjkUAAAAAM6RMk-HsOcFjoHl-bEMQKllPOdF'

export const storage = `https://firebasestorage.googleapis.com/v0/b/${identifier}.appspot.com/o`

export const database = app.database()

export const auth = app.auth()

export const unregister = () => {
  return auth.currentUser.delete()
}

// export const messaging = firebase.messaging()

export const authenticate = (email, password, remember = false) => {
  let persistence = remember ? firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.SESSION
  return auth.setPersistence(persistence).then(async () => {
    return auth.signInWithEmailAndPassword(email, password)
  })
}

export const register = (email, password, remember = false) => {
  let persistence = remember ? firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.SESSION
  return auth.setPersistence(persistence).then(async () => {
    return auth.createUserWithEmailAndPassword(email, password)
  })
}

export const disconnect = () => {
  return auth.signOut()
}
