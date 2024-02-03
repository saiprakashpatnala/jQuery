$("#ff").submit(function(e){
    e.preventDefault()
    submit()
})

let val=""

$("#x").change(function(e){
    val=e.target.value
})
$("#y").change(function (e) {
  val = e.target.value;
});
$("#z").change(function (e) {
  val = e.target.value;
});

function submit(){
    $("#text").text(`Your Favourite place is ${val}`)
}