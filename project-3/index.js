$("button").click(function(){
    if($("#inputElement").val()===""){
        $("#messageText").text("Please Enter Username")
    }
   else if (($("#passwordElement").val() === "")) {
      $("#messageText").text("Please Enter Password");
    }
    else{
         $("#messageText").text("Welcome");
    }
})