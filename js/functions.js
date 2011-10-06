$(document).ready(function(){

       //Full Box Sliding (Hidden to Visible)
	   $('.block').hover(function(){
	        $(".slider", this).stop().animate({left:'0px'},{queue:false,duration:160});
	        }, function() {
	        $(".slider", this).stop().animate({left:'140px'},{queue:false,duration:160});
	        });	     
 });