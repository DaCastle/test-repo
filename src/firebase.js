const firebase = require('firebase')
// Required for side-effects
require('firebase/firestore')

firebase.initializeApp({
  apiKey: 'AIzaSyCRrWq8g9kVysht-6uUMCPmv5JKxLGymUQ',
  authDomain: 'dakotacastleberg-e90bf.firebaseapp.com',
  databaseURL: 'https://dakotacastleberg-e90bf.firebaseio.com',
  projectId: 'dakotacastleberg-e90bf',
  storageBucket: 'dakotacastleberg-e90bf.appspot.com',
  messagingSenderId: '304954923337',
  appId: '1:304954923337:web:a48b64433cd9852cd2e298'
})
var db = firebase.firestore()
export default db
