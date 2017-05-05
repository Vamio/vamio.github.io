$(document).ready(function(){
  var i = 0;
  $("#attack").hide();
  $("#47").hide();
  $("#228").hide();
  $("#300").hide();

   $("input").click(function(event){
    i++;
    $("#attack").show();
    $("#kz").text("Вы атаковали Казахстан " + i + " раз(а)");

    if(i==47){
    	$("#47").show();
    }
    if(i==228){
    	$("#228").show();
    }
    if(i==300){
    	$("#300").show();
    }
    if(i==1000){
    	$("#1000").text("Назарбай вами доволен!");
    }
   });
});