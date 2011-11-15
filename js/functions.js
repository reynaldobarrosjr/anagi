//alert("Width: " + screen.width);
$(document).ready(function(){
		$("a[rel=example_group]").fancybox({
				'transitionIn'		: 'none',
				'transitionOut'		: 'none',
				'titlePosition' 	: 'over',
				'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
					return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
				}
		});
		if(screen.width<1600){deslocamento='90px';} else {deslocamento='138px';}
		if(screen.width==1280){deslocamento='80px';};
		alert("Deslocamento= "+ deslocamento);
	   
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