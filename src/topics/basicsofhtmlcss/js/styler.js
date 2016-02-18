$(document).ready(function(){
	
	var title = $('header h1 span');
	var header = $('header')
	
	var hint = $('div.hint');
	var subheader = $('header h2')
	
	var mainwrapper = $('section.wrapper');
	var category = mainwrapper.find('.thumbnail a');

	var slidewrap = $('section.swrapper');
	
	var leftaside = $('aside.left');
	var rightaside = $('aside.right');
	
	var footer = $('footer');
	
	var ctrls = footer.find('.ctrls');
	
	var widget = $('.displaywidget h4');

	widget.click(function(){
		$(this).parent().find('.contains').slideToggle('slow');
	});
	
	/* loads base animation */
	header.click(function(){
				  
		if(!$(this).hasClass('animateheader'))
		{
			$(this).addClass('animateheader');
			title.addClass('animatepagetitle');
		}
		if(!$(footer).hasClass('animatefooter'))		
			footer.addClass('animatefooter');
			
		mainwrapper.addClass('animatewrapper');
		
		if(slidewrap.hasClass('animateswrap'))
			slidewrap.removeClass('animateswrap');		
			
		if(leftaside.hasClass('animateleft'))
			leftaside.removeClass('animateleft');
			
		if(rightaside.hasClass('animateright'))	
			rightaside.removeClass('animateright');	
			
		if($('header h2').hasClass('animateheading'))	
			$('header h2').removeClass('animateheading');
		
		$('.author').hide();
		hint.hide();
	})
	
	subheader.click(function(){
		return false;
	});
	
	category.click(function(){
		mainwrapper.removeClass('animatewrapper');
		leftaside.addClass('animateleft');
		rightaside.addClass('animateright');	
		slidewrap.addClass('animateswrap');
		
		return false;
	});
	
	var d = new Date();
	
	var month = d.getMonth()+1;
	var day = d.getDate();
	
	var output = ((''+day).length<2 ? '0' : '') + day + '/' +
		((''+month).length<2 ? '0' : '') + month  + '/' + 
		d.getFullYear()  ;
		
	var datetimeattr = d.getFullYear() + '-' +
    ((''+month).length<2 ? '0' : '') + month + '-' +
    ((''+day).length<2 ? '0' : '') + day;
	
	$('time').html(output);		
	$('time').attr('datetime',datetimeattr);	


});