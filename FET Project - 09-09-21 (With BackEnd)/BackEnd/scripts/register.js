
var nameRef = document.getElementById("name");
var passwordRef = document.getElementById("password");
var confPasswordRef = document.getElementById("confPassword");
var userName = document.getElementById("emailId");
//const Axios=require("axios");

var handleOnClick=(event)=>{
          
    event.preventDefault();
    if (passwordRef.value === confPasswordRef.value) {
        alert("Submit successful");

       
        var user = {
            name: nameRef.value,
            userName: userName.value,
            password: passwordRef.value,
        };

        $.ajax({
            url: 'http://localhost:3000/users',
            method: "GET",
            contentType: "application/json",
            dataType: "json",
            success: (response) => {
                let flag2 = true;

                for(let i=0;i<response.length;i++)
                {
                    if(response[i].userName === userName.value)
                    {
                        flag2=false;
                        alert("User Already exists");
                        console.log(flag2);
                        location.href = "../FrontEnd/signup.html";
                        break;
                    }
                }

                //If user does not exists then it will add the user
                if (flag2) {
                    //posting user data to JSON file
                    $.ajax({
                        url: 'http://localhost:3000/users',
                        method: "POST",
                        contentType: "application/json",
                        dataType: "json",
                        data: JSON.stringify(user),
                        success: function () {
                            console.log("User added");
                            location.href = "../FrontEnd/login.html";
                            alert("User added");
                        },
                        error: function () {
                            console.log("Errorrrr");
                        },
                        complete: function () {
                            console.log("Completed")
                        }
                    })
                }
            },
            error: function () {
                console.log("Errorrrr");
            },
            complete: function () {
                console.log("Completed")
            }
        })
    }

}




   
/*
console.log(user);
    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        url: "http://localhost:3000/users",
        data:JSON.stringify(user),
        dataType: "json",
        success: function(resultData) { alert("Save Complete") 
                                         console.log(resultData);}

    })
*/