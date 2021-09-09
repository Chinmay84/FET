
var display=()=>{
    console.log("here");
    var isLogin=sessionStorage.getItem("userid");
    if(isLogin!=null)
    {
       //document.getElementById("login").style.visibility="none";
       //document.getElementById("signup").style.visibility="none";

       document.getElementById("login").style.display="none";
       document.getElementById("signup").style.display="none";
       
    }
    else{
       
       // document.getElementById("createblog").style.visibility="none";
       // document.getElementById("logout").style.visibility="none";

        document.getElementById("createblog").style.display="none";
        document.getElementById("logout").style.display="none";

    }

}


/*
var display=()=>{
    var isLogin=sessionStorage.getItem("userid");
    $(document).ready(()=>{
        $("#nav").hide();
        if(isLogin!=null){
            $("#createblog").hide();
            $("#logout").hide();
        }else{
            $("#login").hide();
            $("#signup").hide();
            
        }

        
})
}
*/