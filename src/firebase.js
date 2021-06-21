import firebase from 'firebase'
import "firebase/auth"


const app = firebase.initializeApp( {
    apiKey: "AIzaSyDe_6SUWnRwg7GGpapnwQA25zi4qdU7eqE",
    authDomain: "coinpro-f5783.firebaseapp.com",
    projectId: "coinpro-f5783",
    storageBucket: "coinpro-f5783.appspot.com",
    messagingSenderId: "1081930614435",
    appId: "1:1081930614435:web:604a1cafecbbda86f96116",
});

export const auth = firebase.auth();
export default app
