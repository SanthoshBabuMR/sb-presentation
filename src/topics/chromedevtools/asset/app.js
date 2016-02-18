(function(){
	var crnt = "current";
	var slide = "slide"
	var doc = $("body").hammer();
	
	var next = function() {
		var currentSlide = $('.'+crnt); 
		if(currentSlide.prev('.'+slide).length) {
			currentSlide.removeClass(crnt);
			currentSlide.prev('.'+slide).addClass(crnt);		
		}
	}
	var prev = function() {
		var currentSlide = $('.'+crnt); 
		if(currentSlide.next('.'+slide).length) {
			currentSlide.removeClass(crnt);
			currentSlide.next('.'+slide).addClass(crnt);		
		}
	}
	
	$(document).on('keydown',function(e){
		if(e.keyCode == 38) {
			next();
		}
		else if(e.keyCode == 40) {
			prev();
		}
	});
	
	doc.on("swipeleft", function() {
		prev();
	});
	
	doc.on("swiperight", function() {
		next();
	});
	
	$('body').addClass('loaded');
})()