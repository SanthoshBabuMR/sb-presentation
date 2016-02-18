var viewport = {
	vpflag : '',
	narrowvp : 600,
	midvp : 800,
	largevp : 1600,
	detectvp : function(){
		w = $(window).width();
		if(w <= viewport.narrowvp && !(viewport.vpflag.match(/ns/i))){
			//console.log('narrow screen');
			viewport.vpflag += 'ns';			
			viewport.loadfiles(['../css/narrowvp.css']);
		}
		else if(w > viewport.narrowvp && w <= viewport.midvp && !(viewport.vpflag.match(/ms/i))){
			//console.log('mid screen');
			viewport.vpflag += 'ms';			
			viewport.loadfiles(['../css/midvp.css']);
		}
		else if(w > viewport.midvp && !(viewport.vpflag.match(/ls/i))){
			//console.log('large screen');
			viewport.vpflag += 'ls';			
			viewport.loadfiles(['../css/largevp.css']);
		}
	},
	loadfiles: function(files){
		Modernizr.load({
			  test: true,
			  yep: files
		});
	}
}
var gnav = {
	vpwidth : '',
	classname : 'show',
	init: function(){
		vpwidth = $(window).width();
		target= $('#content-wrapper nav');
		target.click(function(){
				$(this).toggleClass(gnav.classname);
		});
	}
}
var backtotop = {
	init: function(){
		var bd = $('#page-wrapper');
		bd.prepend("<div style=\"display:none;\" class=\"nav_up\" id=\"nav_up\"></div> \
              		<div style=\"display:none;\" class=\"nav_down\" id=\"nav_down\"></div>");
		if(!$.browser.msie)backtotop.activate();
	},
	activate: function(){
		var $elem = $('#content-wrapper');
		$('#nav_up').fadeIn('slow');
		$('#nav_down').fadeIn('slow');  
		
		$(window).bind('scrollstart', function(){
			$('#nav_up,#nav_down').stop().animate({'opacity':'0.2'});
		});
		$(window).bind('scrollstop', function(){
			$('#nav_up,#nav_down').stop().animate({'opacity':'1'});
		});
		
		$('#nav_down').click(
			function (e) {
				$('html, body').animate({scrollTop: $elem.height()}, 2000);
			}
		);
		$('#nav_up').click(
			function (e) {
				$('html, body').animate({scrollTop: '0px'}, 2000);
			}
		);
	}
}
function temp(){
	var by = $('body');
	by.css("maxWidth","480px");
	if($(window).width() >= 600)
		by.prepend("<div style='position:fixed; background: #23201C; padding: 4px; color: #DFC484; right: 0; top: 0; z-index:1'> \
		<p onclick='$(body).css(\"maxWidth\",\"1600px\")' style='cursor:pointer; margin: 0 10px;'>1600px</p> \
		<p onclick='$(body).css(\"maxWidth\",\"800px\")' style='cursor:pointer; margin: 0 10px;'>800px</p> \
		<p onclick='$(body).css(\"maxWidth\",\"600px\")' style='cursor:pointer; margin: 0 10px;'>600px</p> \
		<p onclick='$(body).css(\"maxWidth\",\"480px\")' style='cursor:pointer; margin: 0 10px;'>480px</p> \
		<p onclick='$(body).css(\"maxWidth\",\"320px\")' style='cursor:pointer; margin: 0 10px;'>320px</p> \
		<p onclick='$(body).css(\"maxWidth\",\"240px\")' style='cursor:pointer; margin: 0 10px;'>240px</p> \
		<p onclick='location.href=\"#\"+$(\"body\").attr(\"id\")' style='cursor:pointer; margin: 0 10px;'>top</p></div>");

}
function fontresize(){
	var target = $('#page-header');
	var container = "<div class='font-access'><span class='inc'>increase font</span><span class='dec'>decrease font</span></div>";
	target.append(container);
	var inc = $('#page-header .inc');
	var dec = $('#page-header .dec');
	inc.click(function(){
		$('body').css('font-size','20px');
		$(this).hide();
		dec.show();
  });	
	dec.click(function(){
		$('body').css('font-size','16px');
		$(this).hide();
		inc.show();
  });
	
}
$(document).ready(function(){
	/*viewport.detectvp(); // call detectvp on page load;
	$(window).resize(function(){
		  viewport.detectvp(); // call detectvp if browser resizes;
	});	*/

	gnav.init();
	backtotop.init();
	//fontresize();
	
	/* temp setting */
	//temp();
});

