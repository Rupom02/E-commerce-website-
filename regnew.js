function alert(){
    var nam=document.getElementById("name").value;
    if(nam==""){
        document.getElementById("name").style.border="1px solid red";
        document.getElementById("nname").innerHTML="*required";
        document.getElementById("nname").style.color="red";
        event.preventDefault();
    }

    var email=document.getElementById("email").value;
    if(email==""){
        document.getElementById("email").style.border="1px solid red";
        document.getElementById("nemail").innerHTML="*required";
        document.getElementById("nemail").style.color="red";
        event.preventDefault();
    }

    var mobnum=document.getElementById("mobilenumber").value;
    if(mobnum==""){
        document.getElementById("mobilenumber").style.border="1px solid red";
        document.getElementById("nmobilenumber").innerHTML="*required";
        document.getElementById("nmobilenumber").style.color="red";
        event.preventDefault();
    }

    var country=document.getElementById("country").value;
    if(country==""){
        document.getElementById("country").style.border="1px solid red";
        document.getElementById("ncountry").innerHTML="*required";
        document.getElementById("ncountry").style.color="red";
        event.preventDefault();
    }

    var password=document.getElementById("password").value;
    if(password==""){
        document.getElementById("password").style.border="1px solid red";
        document.getElementById("npassword").innerHTML="*required";
        document.getElementById("npassword").style.color="red";
        event.preventDefault();
    }
    else if (password.length < 8) {
        document.getElementById("password").style.border="1px solid red";
        document.getElementById("npassword").innerHTML = "Required minimum 8 characters";
        document.getElementById("npassword").style.color = "red";
        event.preventDefault(); 
    }

    var againpassword=document.getElementById("againpassword").value;
    if(againpassword==""){
        document.getElementById("againpassword").style.border="1px solid red";
        document.getElementById("nagainpassword").innerHTML="*required";
        document.getElementById("nagainpassword").style.color="red";
        event.preventDefault();
    }
    else if(againpassword.length!=password.length){
        document.getElementById("againpassword").style.border="1px solid red";
        document.getElementById("nagainpassword").innerHTML="Password doesn't match";
        document.getElementById("nagainpassword").style.color="red";
        event.preventDefault();
    }

    var address=document.getElementById("address").value;
    if(address==""){
        document.getElementById("address").style.border="1px solid red";
        document.getElementById("naddress").innerHTML="*required";
        document.getElementById("naddress").style.color="red";
        event.preventDefault();
    }

}