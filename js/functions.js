//alert("Width: " + screen.width);
$(document).ready(function(){
		if(screen.width<1600){deslocamento='90px';} else {deslocamento='138px';}
		//alert("Deslocamento= "+ deslocamento);
	   
       //Full Box Sliding (Hidden to Visible)
	   $('.block').hover(function(){
	        $(".slider", this).stop().animate({left:'0px'},{queue:false,duration:160});
	        }, function() {
	        $(".slider", this).stop().animate({left:deslocamento},{queue:false,duration:160});
	        });	  
	        
		// set opacity to nill on page load
		$("#menu li span").css("opacity","0");
		// on mouse over
		$("#menu li span").hover(function () {
			// animate opacity to full
			$(this).stop().animate({
				opacity: 1
			}, 'fast');
		},
		// on mouse out
		function () {
			// animate opacity to nill
			$(this).stop().animate({
				opacity: 0
			}, 'fast');
		});        
	      
 });