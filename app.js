

//     const firebaseConfig = {
//         apiKey: "AIzaSyCABy1pYu-az1Kv2uzlG8_udLYn4SzEqkM",
//         authDomain: "pop-ballon-fa278.firebaseapp.com",
//         projectId: "pop-ballon-fa278",
//         storageBucket: "pop-ballon-fa278.appspot.com",
//         messagingSenderId: "217664224160",
//         appId: "1:217664224160:web:2c2d8960bb55d3b9d9c2c5",
//         measurementId: "G-5DTR4BZKZZ"
      
// };



// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);


// function signin() {
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     console.log(email, password);



//     firebase.auth().signInWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//             // Signed in
//             const user = userCredential.user;
//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(errorMessage);
//             // ..
//         });
// }

// function newPage(){
// location.href= "http://127.0.0.1:5500/main.html"
// }

let popped = 0;

document.addEventListener('mouseover', function(e){
    
    if (e.target.className === "balloon"){
        
                e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "POP!";
                popped++;
                removeEvent(e);
                checkAllPopped();
    }   
});

function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){
        
    })
};

function checkAllPopped(){
    if (popped === 24){
        console.log('all popped!');
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#yay-no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
};