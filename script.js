// ------------------------------
// Firebase Configuration
// ------------------------------
const firebaseConfig = {
     apiKey: "AIzaSyAy6w5TCgcdyRfTHyGUyJAgBiOvX6fac7Q",
     authDomain: "oximeter-465df.firebaseapp.com",
     databaseURL: "https://oximeter-465df-default-rtdb.asia-southeast1.firebasedatabase.app",
     projectId: "oximeter-465df",
     appId: "1:670334085658:web:2ee9217a3d6a7d93df7fa3",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// ------------------------------
// Function to Update WiFi Credentials
// ------------------------------
function updateWiFi() {
    const ssid = document.getElementById("ssid").value;
    const password = document.getElementById("password").value;

    if (!ssid || !password) {
        document.getElementById("status").innerHTML = "Please enter both SSID and Password.";
        return;
    }

    // Write to Firebase path: /wifi
    firebase.database().ref("wifi").set({
        ssid: ssid,
        password: password
    })
    .then(() => {
        document.getElementById("status").innerHTML = "WiFi Updated Successfully!";
    })
    .catch((error) => {
        document.getElementById("status").innerHTML = "Error: " + error;
    });
}

