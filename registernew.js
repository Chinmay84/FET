var formRef = document.getElementById("sign-form");

function handleOnBlur(inTag){
    if(inTag.value===""){
      inTag.style.borderColor = "red";
    }
    if(inTag.value!=""){
      inTag.style.borderColor = "inherit";
    }
  }







var nameRef = document.getElementById("name");
var passwordRef = document.getElementById("password");
var confPasswordRef = document.getElementById("confPassword");
var userName = document.getElementById("emailId");





var handleOnClick=(inTag,event)=>{

handleOnBlur(inTag)


var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;  //password between 7 to 15 characters which contain at least one numeric digit and a special character
console.log();
if(passwordRef.value==confPasswordRef.value)
{

if(paswd.test(passwordRef.value) && passwordRef.value!=null)
{
    var user = {
        name: nameRef.value,
        userName: userName.value,
        password: passwordRef.value,
    };
    console.log(user);
    $.ajax({
        type: "GET",
        url: `http://localhost:3000/users?userName=${userName.value}`,
        contentType: "application/json",
        dataType: "json",
        success: (response) => {
                console.log(response);
                if(response[0]==null)
                {
                    console.log("in ");

                    $.ajax({
                        type: "POST",
                        url: 'http://localhost:3000/users',
                        contentType: "application/json",
                        dataType: "json",
                        data: JSON.stringify(user),
                        success: function (data) {
                            if(data!=null){
                                alert("Registered Successfully");
                                window.location.replace("../FrontEnd/login.html");
                            }

                            else
                                alert("post not complete");
                        }
                    });



                }else{
                    alert("Blank");

                }
        }
    });

  }else{
        if(nameRef.value == null && passwordRef.value == null && confPasswordRef.value == null && userName.value == null)
            alert("blank")
        else
            alert("password between 7 to 15 characters which contain at least one numeric digit and a special character")
      //document.getElementById("password").innerHTML="<div>password between 7 to 15 characters which contain at least one numeric digit and a special character</div>"
      //alert("password between 7 to 15 characters which contain at least one numeric digit and a special character")
  }
}else{
    alert("password mismatch");
}
}




