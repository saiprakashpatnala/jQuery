$("button").click(function(){
    let val=$("#tt").val()
    console.log(val)
    localStorage.setItem("yourStory",val)
    $("#tt").val("")
})

let item = localStorage.getItem(yourStory);
console.log(item)