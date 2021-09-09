var onClickforlike=()=>{
var likecount;
    $.ajax({
        type: 'GET',
        contentType: 'application/json',
        url: `http://localhost:3000/blogs?userid=${sessionStorage.getItem("userid")}`,
        dataType: "json",
        success: (result)=>{
            if(result!=null){


                $.ajax({
                    type: 'PUT',
                    contentType: 'application/json',
                    url: `http://localhost:3000/blogs?userid=${result[0].id}`,
                    data:JSON.stringify(),
                    dataType: "json",
                    success: function(resultData) { alert("Save Complete") 
                                                     console.log(resultData);}
        
                })

                result[0].like++
            }
        }

    })

    


}