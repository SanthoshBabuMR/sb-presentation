(function() {

	var forEach = function(e, callback) {
		for(var i=e.length-1; i>=0 ; i--) {
			callback.call( e[i], i, e );
		};
	};
	
	var initSlider = function( obj ) {
		var ele = obj || document.getElementsByClassName('slide');
		forEach(ele, function(index, list){
			this.className += " hide";
		});
		ele[0].className = "slide active show";
	};
	
	var setControls = function() {
		var p = document.getElementsByClassName('p')[0];
		var n = document.getElementsByClassName('n')[0];
		p.addEventListener("click", prevSlide);
		n.addEventListener("click", nextSlide);
	};
	
	var nextSlide = function(){
		ele = document.getElementsByClassName('active')[0];
		nxtSibling(ele).className += "slide active show";
		ele.className = "slide hide";
		if(nxtSibling(ele) === document.getElementsByClassName("slide")[document.getElementsByClassName("slide").length - 1]) {
			document.getElementsByClassName('n')[0].className="n hide";
			document.getElementsByClassName('p')[0].className="p";
		}
		else {
			document.getElementsByClassName('n')[0].className="n";
			document.getElementsByClassName('p')[0].className="p";
		}		
	};
	
	var prevSlide = function(){
		ele = document.getElementsByClassName('active')[0];
		prevSibling(ele).className += "slide active show";
		ele.className = "slide hide";
		console.log()
		if(prevSibling(ele) === document.getElementsByClassName("slide")[0]) {
			document.getElementsByClassName('p')[0].className="p hide";
			document.getElementsByClassName('n')[0].className="n";
		}
		else {
			document.getElementsByClassName('p')[0].className="p";
			document.getElementsByClassName('n')[0].className="n";
		}
	};
	
	var nxtSibling = function(e, c){
		if(!(e.nextSibling.nodeType === 1)) {
			e = e.nextSibling;
		}
		return e.nextSibling.className.match(/slide/) ? e.nextSibling : nxtSibling(e.nextSibling.nextSibling);
	}
	
	var prevSibling = function(e, c) {
		if(!(e.previousSibling.nodeType === 1)) {
			e = e.previousSibling;
		}
		return e.previousSibling.className.match(/slide/) ? e.previousSibling : prevSibling(e.previousSibling.previousSibling);
	}
	
	var slider = function() {
		initSlider();
		setControls();
	};
	
	
	var init = function() {
		slider();
	};
	
	init();
})();