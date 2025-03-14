

// login page opens
function openLoginPopup() {
    document.getElementById("login-page").style.display = "block";
}

// login page closed 
function closeLoginPopup() {
    document.getElementById("login-page").style.display = "none";
}


// Get input values and logs it into console
function getLoginInfo(){
    let email  =  document.getElementById('email').value;
    let password =     document.getElementById('password').value;
    if(email === "" || password === ""){
        alert("Email and Password both are required!");
        return; // stops the function 
    }
    alert("You are Logged in!")

    console.log("Email:", email);
    console.log("Password:", password);

}

