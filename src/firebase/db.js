import Firebase from 'firebase'

const config = {
apiKey: "AIzaSyCuV3pZhXfCGo9H2SxT2Q-4UKeJcU4HHNA",
authDomain: "formulario-bddc2.firebaseapp.com",
databaseURL: "https://formulario-bddc2.firebaseio.com",
projectId: "formulario-bddc2",
storageBucket: "formulario-bddc2.appspot.com",
messagingSenderId: "860087460093"
};
export const firebaseApp = Firebase.initializeApp(config)
export const db = firebaseApp.database()

