
    var firebaseConfig = {
      apiKey: "AIzaSyAX5hfrFgo06t_sBkTsczbca_yRvQe7VZs",
      authDomain: "letschat-f6f46.firebaseapp.com",
      projectId: "letschat-f6f46",
      storageBucket: "letschat-f6f46.appspot.com",
      messagingSenderId: "1097599521407",
      appId: "1:1097599521407:web:0aaac3e6c9dd3597a4a54a"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
