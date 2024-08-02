$(document).ready(function () {
  $("#hidden1").on("click", function () {
    $("#hidden1").hide(function () {
      $(".hide1").show();
      $(".hide1").css("cursor", "pointer");
    });
  });
  $(".hide1").click(function () {
    $("#hidden1").show();
    $(".hide1").hide();
  });

  $("#hidden2").on("click", function () {
    $("#hidden2").hide(function () {
      $(".hide2").show();
      $(".hide2").css("cursor", "pointer");
    });
  });
  $(".hide2").click(function () {
    $("#hidden2").show();
    $(".hide2").hide();
  });
  $("#hidden3").on("click", function () {
    $("#hidden3").hide(function () {
      $(".hide3").show();
      $(".hide3").css("cursor", "pointer");
    });
  });
  $(".hide3").click(function () {
    $("#hidden3").show();
    $(".hide3").hide();
  });

  $("#works1").mouseover(function () {
    $(".img_title1").css("visibility", "visible");
  });
  $("#works1").mouseout(function () {
    $(".img_title1").css("visibility", "hidden");
  });
  $("#works2").mouseover(function () {
    $(".img_title2").css("visibility", "visible");
  });
  $("#works2").mouseout(function () {
    $(".img_title2").css("visibility", "hidden");
  });
  $("#works3").mouseover(function () {
    $(".img_title3").css("visibility", "visible");
  });
  $("#works3").mouseout(function () {
    $(".img_title3").css("visibility", "hidden");
  });
  $("#works4").mouseover(function () {
    $(".img_title4").css("visibility", "visible");
  });
  $("#works4").mouseout(function () {
    $(".img_title4").css("visibility", "hidden");
  });
  $("#works5").mouseover(function () {
    $(".img_title5").css("visibility", "visible");
  });
  $("#works5").mouseout(function () {
    $(".img_title5").css("visibility", "hidden");
  });
  $("#works6").mouseover(function () {
    $(".img_title6").css("visibility", "visible");
  });
  $("#works6").mouseout(function () {
    $(".img_title6").css("visibility", "hidden");
  });
  $("#works7").mouseover(function () {
    $(".img_title7").css("visibility", "visible");
  });
  $("#works7").mouseout(function () {
    $(".img_title7").css("visibility", "hidden");
  });
  $("#works8").mouseover(function () {
    $(".img_title8").css("visibility", "visible");
  });
  $("#works8").mouseout(function () {
    $(".img_title8").css("visibility", "hidden");
  });
});
