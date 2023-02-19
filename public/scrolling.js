
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".nav-top").css("background" , "blue");
        }
        else{
            $(".nav-top").css("background" , "#333");  	
        }
      
    })
  })