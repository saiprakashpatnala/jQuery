let count=0
$("#userInput").keypress(function(e){
    count+=1
    $("#keydownCounter").text(count)
    $("#keydownCode").text(e.keyCode)
})