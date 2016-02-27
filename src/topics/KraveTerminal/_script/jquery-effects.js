// JavaScript Document

$(document).ready(function(){
				
				$("table.apply-oe tbody tr:odd").css('background-color','#EEEEEE');
				$("table.apply-oe tbody tr:even").css('background-color','#FFFFFF');
				$("table.apply-bdr tbody tr").css('border','1px solid #CCCCCCC');
				$("table.apply-bdr tbody tr td").css('border','1px solid #CCCCCCC');
				
				
				$("ul.tree li:odd").css('background-color','#EEF7E2');
				$("ul.tree li:even").css('background-color','#FFFFFF');
				$("ul.tree li.branch-info:even").css('background-color','#FFFFFF');
				$("ul.tree li.branch-info:odd").css('background-color','#FFFFFF');
				
				/* animate back to top */
				$('a[href=#back-to-top]').click(function(){
					$('html, body').animate({scrollTop:0}, 'slow');
					return false;
				});
				/* animate back to top */
				
				$("a.anchorLink").anchorAnimate(); /* animate scrolling to anchor activate */
				
				$('.site-logo').dblclick(function() {
 			 	alert(djs.checklist_upi());
				});
			});

/* animate scrolling to anchor */
jQuery.fn.anchorAnimate = function(settings) {

 	settings = jQuery.extend({
		speed : 1000
	}, settings);	
	
	return this.each(function(){
		var caller = this
		$(caller).click(function (event) {	
			event.preventDefault()
			var locationHref = window.location.href
			var elementClick = $(caller).attr("href")
			
			var destination = $(elementClick).offset().top;
			$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
				window.location.hash = elementClick
			});
		  	return false;
		})
	})
}
/* animate scrolling to anchor */