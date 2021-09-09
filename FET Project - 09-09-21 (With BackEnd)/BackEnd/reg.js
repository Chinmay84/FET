
var nameRef = document.getElementById("name");
var passwordRef = document.getElementById("password");
var confPasswordRef = document.getElementById("confPassword");
var userName = document.getElementById("emailId");
//var Axios = require("axios");
//const jquery=require("jquery");


function handleOnClick(event) {
        
    event.preventDefault();
    if (passwordRef.value === confPasswordRef.value) {
        alert("Submit successful");
        var user = {
            name: nameRef.value,
            userName: userName.value,
            password: passwordRef.value
        };
        console.log(user);
        Axios
            .post("http://localhost:3000/", user)
            .then(res => console.log(user))
            .catch(err => console.error(err));
    } else {
        alert("Passwords do not match");
        
       // $.support.cors=true;
        /*$.ajax({
            Type: 'POST',
            url: "http://localhost:3000",
            data:user,
            dataType: "json",
            success: function(resultData) { alert("Save Complete") }

        })
        
        $.ajax({
            Type: 'GET',
            url: "http://localhost:3000",
            //data:user,
            dataType: "json",
            success: function(resultData) { console.log(resultData) }

        })*/
        
    }

}
