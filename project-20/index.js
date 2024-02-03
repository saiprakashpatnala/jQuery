$("#getActivityBtn").click(function () {
  let url = "https://apis.ccbp.in/random-activity";
  $("#spinner").removeClass("d-none");
  $("#result").addClass("d-none");

  fetch(url, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      $("#spinner").addClass("d-none");
      $("#result").removeClass("d-none");
      let { activity, type, image } = data;
      $("#activityImg").attr("src", image);
      $("#activityType").text(type);
      $("#activityName").text(activity);
    })

    .catch((e) => {
      console.log(e);
      $("#spinner").addClass("d-none");
      $("#error")
        .removeClass("d-none")
        .text("Failed to fetch activity. Please try again.");
    });
});
