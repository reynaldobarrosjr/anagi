$(document).ready(function(){
	   	//detect screen resolution
	   	alert("Your resolution is"+ screen.width) + alert(screen.height);
		var css = "";
		var loadcss="";
		if (screen.width >= 1280 && screen.height >=800) css='../css/small.css';
		else if (screen.width <= 1280 && screen.height <= 768) css='../css/medium.css';
		else css='no';
		if (css!='no'){
		loadcss=window.document.write("<link href='"+css+"' rel='stylesheet' type='text/css' />"); 
		document.getElementsByTagName("head")[4].appendChild(loadcss);

		};
	
       //Full Box Sliding (Hidden to Visible)
	   $('.block').hover(function(){
	        $(".slider", this).stop().animate({left:'0px'},{queue:false,duration:160});
	        }, function() {
	        $(".slider", this).stop().animate({left:'90px'},{queue:false,duration:160});
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