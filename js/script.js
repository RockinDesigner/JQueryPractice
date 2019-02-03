$(document).ready(function(){
  $(document).on("mousemove", function(ev) {
    var mouseX = ev.originalEvent.pageX
    var mouseY = ev.originalEvent.pageY
    $("img").each(function() {
      var imgX = $(this).position().left + 70
      var imgY = $(this).position().top + 70

      var diffX = mouseX - imgX
      var diffY = mouseY - imgY

      var radians = Math.atan2(diffY, diffX)
      var angle = radians * 180 / Math.PI

      $(this).css("transform", "rotate("+ angle + "deg)")
    });

    //ACHTUNG! This code has bad works. :D

    // var count = 0
    // var images = ["img/1.png", "img/2.png", "img/3.png"]
    //
    // setInterval(function() {
    //   count += 1
    //   var image = images[count]
    //
    //   $("img").attr("src", image)
    // }, 2000)
  });
});
