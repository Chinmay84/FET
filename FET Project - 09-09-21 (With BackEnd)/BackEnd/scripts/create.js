
 var editor;

var onloadtexteditor=()=>{

    ClassicEditor
.create( document.querySelector( '#editor' ) )
.then( newEditor => {
    editor = newEditor;
} )
.catch( error => {
    console.error( error );
} );

}




var handleOnClickforBlog=(event)=>{
    event.preventDefault();
    try{
        var name = document.getElementById('image').files.item(0).name;
    }catch(e){
        var name="none";
    }

// Assuming there is a <button id="submit">Submit</button> in your application.
    /*document.querySelector( '.submit-btn' ).addEventListener( 'click', () => {
    const editorData = editor.getData();
    console.log(editorData);
    })*/






    const editorData = editor.getData();
    console.log(editorData);
    let editortext = editorData.replace(/<[^>]+>/g, '');
    console.log(plainText);
    var userid=sessionStorage.getItem("userid");

    var blog={
        userid:userid,
	    category:document.getElementById("category").value,
	    title:document.getElementById("txttitle").value,
	    imgpath:"../BackEnd/images/"+name,
        text:editortext,
	    timestamp:new Date(),
	    likes:50,
	    comments:["sjfiwjeif","ewfjweferg"]
    }


        console.log(blog);
            $.ajax({
                type: 'POST',
                contentType: 'application/json',
                url: "http://localhost:3000/blogs",
                data:JSON.stringify(blog),
                dataType: "json",
                success: function(resultData) { alert("Save Complete")
                                                 console.log(resultData);}

            })

}

