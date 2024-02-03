let countries = {
  paris: "France",
  london: "United Kingdom",
  newYork: "USA",
  newDelhi: "India",
};
$("#sel").change(function(e){
    let val=e.target.value
    let text=countries[val]
    $("#sp").text(text)
})