
$("h1").addClass("big-title margin-50");

$("button").html("<em>Press me</em>")

$("a").attr("href", "https://www.yahoo.com/")

// $("h1").click(function(){
//   $("h1").css("color", "purple");
// }

$("button").click(function() {
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});

$("input").keydown(function(event) {
  $("h1").text(event.key);
});

$(document).on("mouseover", function() {
  $("h1").css("color", "blue")
});
