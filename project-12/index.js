$("<input>").attr("type","checkbox").attr("id","inpu").appendTo("div")

$("<label>")
  .attr("for", "inpu")
  .attr("id","lab")
  .text("Color the Heading Element")
  .appendTo("div");

  $("<h1>").text("Heading Element").attr("id","head").appendTo("div")

  $("#inpu").click(function(){
    $("#head").toggleClass("kk")
    if($("#inpu").prop("checked")){
      $("#lab").text("Uncolor the Heading Element");
    }
    else{
        $("#lab").text("Color the Heading Element"); 
    }
  })