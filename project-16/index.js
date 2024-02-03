let c = 0;
function start() {
  if (c < 10) {
    $("#seconds").text(`0${c}`);
  } else {
    $("#seconds").text(`${c}`);
  }
  c += 1;
}

let id;

$("#startBtn").click(function () {
  id = setInterval(start, 1000);
});

$("#stopBtn").click(function () {
  clearInterval(id);
});
