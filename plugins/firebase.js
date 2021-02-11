import firebase from 'firebase/app'
import 'firebase/firestore'

export default ({ env, store }, inject) => {
    const firebaseConfig = {
        apiKey: "AIzaSyDGRucnGvAHk6cEKygBtzJj3dGyQd-ae10",
        authDomain: "airtable-testing-e0b8c.firebaseapp.com",
        databaseURL: "", // throws error without
        projectId: "airtable-testing-e0b8c",
        storageBucket: "airtable-testing-e0b8c.appspot.com",
        messagingSenderId: "804306223232",
        appId: "1:804306223232:web:0e87e604659a304967e665"
    }

    if (!firebase.apps.length) {
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig)
    }

    inject('firebase', firebase)
}