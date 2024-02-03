function inlineEventListener(){
    $("#message").text("inlineEventListener");
}

$("#onEventListenerBtn").click(function(){
    $("#message").text("onEventListener");
})

function change(){
    $("#message").text("addEventListener");
}

$("#addEventListenerBtn").click(change)