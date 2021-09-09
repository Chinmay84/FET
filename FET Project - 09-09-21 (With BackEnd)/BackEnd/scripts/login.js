//const { response } = require("express");

var onClickforlogin=()=>{
    var email=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    $.ajax({
        type: 'GET',
        contentType: 'application/json',
        url: `http://localhost:3000/users?userName=${email}`,
        dataType: "json",
        success: (result)=>{
            
            if(result!=null){
                console.log(result[0].password);
                if(result[0].password === password)
                {
                    alert("Login successful");
                    sessionStorage.setItem("userid",result.id);
                    window.location.href = "http://127.0.0.1:5500/FrontEnd/home.html";
                }else{
                    console.log("error")
                }
            }else{
                alert("User does not exits");
            }
        }

    })


}


