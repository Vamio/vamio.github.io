$(document).ready(function(){
  var i = 0;
  $("#attack").hide();
   $("input").click(function(event){
    i++;
    $("#attack").show();
    $("#kz").text("Вы атаковали Казахстан " + i + " раз(а)");
   });
});