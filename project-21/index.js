$("#name").blur(function () {
  if ($("#name").val() === "") {
    $("#nameErrMsg").text("Fill in the required details");
  } else {
    $("#nameErrMsg").text("");
  }
});

$("#password").blur(function () {
  if ($("#password").val() === "") {
    $("#passwordErrMsg").text("Fill in the required details");
  } else {
    $("#passwordErrMsg").text("");
  }
});

$("#myForm").submit(function (e) {
  e.preventDefault();
  if ($("#name").val() === "" && $("#password") === "") {
    $("#resultMsg").text("Fill in the required details");
  } else if ($("#name").val() !== "" && $("#password") === "") {
    $("#resultMsg").text("Fill in the required details");
  } else if ($("#name").val() === "" && $("#password") !== "") {
    $("#resultMsg").text("Fill in the required details");
  } else {
    $("#resultMsg").text("Login Success");
  }
});
