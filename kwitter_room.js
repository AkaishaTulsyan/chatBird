var firebaseConfig = {
      apiKey: "AIzaSyDASRRoHb7UzEe_-PYMTEtQ2YEro_GPOgA",
      authDomain: "kwitter-2b2dd.firebaseapp.com",
      databaseURL: "https://kwitter-2b2dd-default-rtdb.firebaseio.com",
      projectId: "kwitter-2b2dd",
      storageBucket: "kwitter-2b2dd.appspot.com",
      messagingSenderId: "761959683009",
      appId: "1:761959683009:web:a86d60a129d5592df65540"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
