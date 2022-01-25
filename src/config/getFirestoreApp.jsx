import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBxf4SkUOcgMqaAqQYTSz7efc55G1F8-A0",
  authDomain: "desafio2nuevo.firebaseapp.com",
  projectId: "desafio2nuevo",
  storageBucket: "desafio2nuevo.appspot.com",
  messagingSenderId: "988004549400",
  appId: "1:988004549400:web:25cad571c2873ad39b546d"
};
const app = initializeApp(firebaseConfig);
export const getFirestoreApp = () => {
  return app
}