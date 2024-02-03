let carBrands = ["Benz", "Ferrari", "Audi", "BMW"]
for(let i of carBrands){
    $("<li>").text(i).appendTo("ul")
}