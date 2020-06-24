import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBnO4OaRsZK2l0_YE5_FSu0GKWYtbUgXVw",
  authDomain: "fir-form-4a7aa.firebaseapp.com",
  databaseURL: "https://fir-form-4a7aa.firebaseio.com",
  projectId: "fir-form-4a7aa",
  storageBucket: "fir-form-4a7aa.appspot.com",
  messagingSenderId: "445458238431",
  appId: "1:445458238431:web:1965a27580ad2b2c88d26a",
  measurementId: "G-Y2M28GCDJN"
};
// Initialize Firebase
const fire = firebase.initializeApp(config);

export default fire;