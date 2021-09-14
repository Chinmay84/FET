
const generatecardwithimage=(imgpath,title,category)=>{
return `
<div class="col-md-4 col-12 mb-3">
<div class="card">
  <img class="img-fluid" alt="100%x280"
    src="${imgpath}">
  <div class="card-body">
    <h4 class="card-title">${title}</h4>
    <div style="display: flex;justify-content: space-between">
    <button type="button" class="btn btn-warning"><a href="categories.html?_sort=likes&_order=desc"
        style="color: black;">${category}</a></button>
        <i  class="fa fa-thumbs-up icon"></i>
    </div>
  </div>
</div>
</div>
     `
}

const generatecardwithoutimage=(imgpath,title,category)=>{
  return `
  <div class="col-md-4 col-12 mb-3">
  <div class="card">
    <img class="img-fluid" alt="100%x280"
      src="../BackEnd/images/image2.jfif">
    <div class="card-body">
      <h4 class="card-title">${title}</h4>
      <button type="button" class="btn btn-warning"><a href="categories.html?_sort=likes&_order=desc"
          style="color: black;">${category}</a></button>
    </div>
  </div>
  </div>
       `
  }



const mostliked=()=>{

    display();
    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "http://localhost:3000/blogs?_sort=likes&_order=desc",
        dataType: "json",
        success: (blogs) => {
            console.log("in");
            let display1="";
            var i=0;
            while(i<=2)
            {
              if(blogs[i].flag)
                display1+=generatecardwithimage(blogs[i].imgpath,blogs[i].title,blogs[i].category)
              else
                display1+=generatecardwithoutimage(blogs[i].imgpath,blogs[i].title,blogs[i].category)
              i++;
            }
            //console.log(dis);
            //console.log(document.getElementById("d"));
            document.getElementById("d1").innerHTML=display1; //first row

            let display2="";
            while(i<=5)
            {
              if(blogs[i].flag)
              display2+=generatecardwithimage(blogs[i].imgpath,blogs[i].title,blogs[i].category)
            else
              display2+=generatecardwithoutimage(blogs[i].imgpath,blogs[i].title,blogs[i].category)
              i++;
            }
            document.getElementById("d2").innerHTML=display2;  //for row 2

        }
    });
}

//document.getElementsByTagName("BODY")[0].addEventListener("onload", mostliked);

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
