import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCMMMEvJp4ZyTrndWrzWv2taeilwNQP1dU",
    authDomain: "whatsapp-clone-a774e.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-a774e.firebaseio.com",
    projectId: "whatsapp-clone-a774e",
    storageBucket: "whatsapp-clone-a774e.appspot.com",
    messagingSenderId: "63925048892",
    appId: "1:63925048892:web:5a3a4fdcb3237430291539"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db