let count=0

function start(){
  $("p").text(count)
  count+=1
}

let id=setInterval(start,1000)
$("button").click(function(){
    clearInterval(id)
})