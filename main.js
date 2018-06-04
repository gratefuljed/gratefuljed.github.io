$(document).ready(function() {
  function change(sourceUrl) {
    var audio = $("#player");
    $("#mpeg-src").attr("src", sourceUrl);
    /****************/
    audio[0].pause();
    audio[0].load(); //suspends and restores all audio element

    //audio[0].play(); changed based on Sprachprofi's comment below
    audio[0].oncanplaythrough = audio[0].play();
    /****************/
  }
  $("#they_love_samson").click(function() {
    change("audio/they_love_sampson.m4a");
    $("#they_love_samson").addClass("active");
    $("#bro_playing").removeClass("active");
    $("#new_minglewood").removeClass("active");
  });
  $("#bro_playing").click(function() {
    change("audio/row_jimmy_playing_eyes_playing.m4a");
    $("#bro_playing").addClass("active");
    $("#they_love_samson").removeClass("active");
    $("#new_minglewood").removeClass("active");
  });
  $("#new_minglewood").click(function() {
    change("audio/new_minglewood.m4a");
    $("#new_minglewood").addClass("active");
    $("#bro_playing").removeClass("active");
    $("#they_love_samson").removeClass("active");
  });
  //    $("#china").click(function(){
  //        change("Augustus_Pablo.mp3");
  //        $("#china").addClass("active");
  //        $("#fire").removeClass("active");
  //        $("#gold").removeClass("active");
  //        $("#hard").removeClass("active");
  //        $("#samson").removeClass("active");
  //    });
  //    $("#fire").click(function(){
  //        change("Augustus_Pablo.mp3");
  //        $("#fire").addClass("active");
  //        $("#china").removeClass("active");
  //        $("#gold").removeClass("active");
  //        $("#hard").removeClass("active");
  //        $("#samson").removeClass("active");
  //    });
  //    $("#gold").click(function(){
  //        change("Augustus_Pablo.mp3");
  //        $("#gold").addClass("active");
  //        $("#fire").removeClass("active");
  //        $("#china").removeClass("active");
  //        $("#hard").removeClass("active");
  //        $("#samson").removeClass("active");
  //    });
  //    $("#hard").click(function(){
  //        change("Augustus_Pablo.mp3");
  //        $("#hard").addClass("active");
  //        $("#fire").removeClass("active");
  //        $("#gold").removeClass("active");
  //        $("#china").removeClass("active");
  //        $("#samson").removeClass("active");
  //    });
  //    $("#samson").click(function(){
  //        change("Augustus_Pablo.mp3");
  //        $("#samson").addClass("active");
  //        $("#fire").removeClass("active");
  //        $("#gold").removeClass("active");
  //        $("#hard").removeClass("active");
  //        $("#china").removeClass("active");
  //    });
});
