

var onClickfordisplay=()=>{

    $.ajax({
        type: 'GET',
        contentType: 'application/json',
        url: "http://localhost:3000/blogs",
        dataType: "json",
        success: (result)=>{
          if(result!=null){
              
          }
        }

    })
}
