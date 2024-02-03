$("#decreaseBtn").click(function(){
    let m=($("p").text())
    m=parseInt(m)
    if(m%2===0){
        let n=m-2
        $("p").text(n)
    }
    else{
         let n = m-1;
         $("p").text(n);
    }
});

$("#increaseBtn").click(function () {
  let m = $("p").text();
  m = parseInt(m);
  if (m % 2 === 0) {
    let n = m + 5;
    $("p").text(n);
  } else {
    let n = m +10;
    $("p").text(n);
  }
});

$("#resetBtn").click(function(){
     $("p").text(0);
})