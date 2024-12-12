function halert(){
    var email = document.getElementById("email").value;
    if(email==""){
        document.getElementById("email").style.border="1px solid red";
        document.getElementById("nemail").innerHTML="*required";
        document.getElementById("nemail").style.color="red";
        event.preventDefault();
    }
    var password = document.getElementById("password").value;
    if(password==""){
       
        document.getElementById("password").style.border="1px solid red";
        document.getElementById("npassword").innerHTML="*required";
        document.getElementById("npassword").style.color="red";
        event.preventDefault();
    }
    else if (password.length < 8) {
        document.getElementById("npassword").innerHTML = "Required minimum 8 characters";
        document.getElementById("npassword").style.color = "red";
        event.preventDefault();
    }
    else {
        var uppercaseCount = 0, lowercaseCount = 0, numberCount = 0, specialCharCount = 0;
    
        for (var i = 0; i < password.length; i++) {
            if (password[i] >= "A" && password[i] <= "Z") {
                uppercaseCount++;
            } else if (password[i] >= "a" && password[i] <= "z") {
                lowercaseCount++;
            } else if (!isNaN(parseInt(password[i]))) {
                numberCount++;
            } else {
                specialCharCount++;
            }
        }
    
        if (uppercaseCount === password.length) {
            document.getElementById("npassword").innerHTML = "Required minimum 1 small letter character";
            document.getElementById("npassword").style.color = "red";
            event.preventDefault();
        }
        if (uppercaseCount === 0) {
            document.getElementById("npassword").innerHTML = "Required minimum 1 capital letter character";
            document.getElementById("npassword").style.color = "red";
            event.preventDefault();
        }
        if (lowercaseCount === password.length) {
            document.getElementById("npassword").innerHTML = "Required minimum 1 capital letter character";
            document.getElementById("npassword").style.color = "red";
            event.preventDefault();
        }
        if (lowercaseCount === 0) {
            document.getElementById("npassword").innerHTML = "Required minimum 1 small letter character";
            document.getElementById("npassword").style.color = "red";
            event.preventDefault();
        }
        if (numberCount === password.length) {
            document.getElementById("npassword").innerHTML = "Required minimum 1 letter & 1 special character";
            document.getElementById("npassword").style.color = "red";
            event.preventDefault();
        }
        if (numberCount === 0) {
            document.getElementById("npassword").innerHTML = "Required minimum 1 number character";
            document.getElementById("npassword").style.color = "red";
            event.preventDefault();
        }
        if (specialCharCount === 0) {
            document.getElementById("npassword").innerHTML = "Required minimum 1 special character";
            document.getElementById("npassword").style.color = "red";
            event.preventDefault();
        }
    }

}