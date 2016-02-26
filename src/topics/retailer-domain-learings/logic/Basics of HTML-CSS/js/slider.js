$(document).ready(function(){
	var slidewrap = $('.swrapper');
    var slidecontainer = $('.slidecontainer');
	var slides = slidecontainer.find('.slide-me');
	var slidename = $('header h2 span');
	
	var hooklsidebar = $('aside.left .sbcontainer article');
	var hookrsidebar = $('aside.right .sbcontainer article');
	
	var hookcategory = $('.thumbnailcontainer div a');
	
	var up = slides.find('.up');
	var down = slides.find('.down');	
	
	var probar = $('footer meter');
	var percentagecal = 100/slides.length;
	for(var loop=0;loop<slides.length;loop++)
	{
		probar.append('<div style="width:'+percentagecal+'%"></div>')
	}
	
	
	
	slidecontainerheight = (slidewrap.css('height').replace(/[^-\d\.]/g, ''))*((slides.length));
	slidecontainer.css('height',slidecontainerheight);
	
	down.click(function(){
		  moveUp(slides, slidename, slidecontainer, null);
	});
	up.click(function(){
		moveDown(slides, slidename, slidecontainer, null);
	});
	
	$(document).keydown(function(e){
		switch(e.keyCode){
			case 37:
						return false;
						break;
			case 38:
						moveDown(slides, slidename, slidecontainer, null);
						return false;
						break;
			case 39:
						return false;
						break;
			case 40:
						moveUp(slides, slidename, slidecontainer, null);
						return false;
						break;	
			case 96:   	initiatekeynav();
						return false;
						break;			
						
			case 97:    keynav(slides, slidename, slidecontainer, 1);
						return false;
						break;
			case 98:    keynav(slides, slidename, slidecontainer, 2);
						return false;
						break;
			case 99:    keynav(slides, slidename, slidecontainer, 3);
						return false;
						break;
			case 100:   keynav(slides, slidename, slidecontainer, 4);
						return false;
						break;
			case 101:   keynav(slides, slidename, slidecontainer, 5);
						return false;
						break;
			case 102:   keynav(slides, slidename, slidecontainer, 6);
						return false;
						break;						
			default:	
		}
	});
	
	hookcategory.click(function(){
		$('header h2').addClass('animateheading')
		var cflag =	($(this).attr('class')).toString();
		cflag = parseInt(cflag.replace('flag',''));
		if(cflag>=sflag)
			moveDown(slides, slidename, slidecontainer, cflag);
		else if((cflag<=sflag))
			moveUp(slides, slidename, slidecontainer, cflag);

	});
	
	hooklsidebar.click(function(){
		var cflag =	($(this).attr('class')).toString();
		cflag = parseInt(cflag.replace('flag',''));
		if(cflag>=sflag)
			moveDown(slides, slidename, slidecontainer, cflag);
		else if((cflag<=sflag))
			moveUp(slides, slidename, slidecontainer, cflag);

	});
	hookrsidebar.click(function(){
		var cflag =	($(this).attr('class')).toString();
		cflag = parseInt(cflag.replace('flag',''));
		if(cflag>=sflag){
			moveDown(slides, slidename, slidecontainer, cflag);}
		else if(cflag<=sflag)
			moveUp(slides, slidename, slidecontainer, cflag);
	});

	
});

	var sflag = 1;
	var maxflag = '';
	var main_slides = new Array();
	var mtemp = 0;
	var sub_slides = new Array();
	var stemp = 0;
	var mainslide_identifier = '';
	var subslide_identifier = '';	
	
	function initiatekeynav(){
		
			var mainwrapper = $('section.wrapper');
			var slidewrap = $('section.swrapper');
			var leftaside = $('aside.left');
			var rightaside = $('aside.right');
			var footer = $('footer');
			var header = $('header');
			var title = $('header h1 span');
			var hint = $('div.hint');
			if(!header.hasClass('animateheader'))
			{
				header.addClass('animateheader');
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
	}
	
	function keynav(slides, slidename, slidecontainer, fg){
	var header = $('header')
	if(!(header.hasClass('animateheader')))
		return;
	
	var mainwrapper = $('section.wrapper');
	var slidewrap = $('section.swrapper');
	
	var leftaside = $('aside.left');
	var rightaside = $('aside.right');
	
		mainwrapper.removeClass('animatewrapper');
		leftaside.addClass('animateleft');
		rightaside.addClass('animateright');	
		slidewrap.addClass('animateswrap');
		$('header h2').addClass('animateheading');
		moveDown(slides, slidename, slidecontainer, fg);
	}
	function moveUp(sid, sldn, sldc,f){
		if(!$('section.swrapper').hasClass('animateswrap'))
			return;
		if(f != null)
		{
			if(main_slides.length == 0)
			{
				createMainSlidesCounter(sid);
			}
			for(var d=1;d<=main_slides.length;d++)
			{
				if(d == f)
				{
					mainslide_identifier = d-1;
					moveby = -(630 * (parseInt(main_slides[mainslide_identifier])-1));
					break;
				}
			}
			sldc.css('top',moveby);				  
			sflag = main_slides[mainslide_identifier];
			return;
		}
		maxflag = sldc.find('.slide-me').length;
		if(sflag==maxflag)
			return;
		if(main_slides.length == 0)
		{
			createMainSlidesCounter(sid);
		}
		moveby = -(630 * sflag);
		sldc.css('top',moveby);
		sflag++;
	}

	function moveDown(sid, sldn, sldc,f){
		if(!$('section.swrapper').hasClass('animateswrap'))
		{
			return;
		}
		if(f != null)
		{
			if(main_slides.length == 0)
			{
				createMainSlidesCounter(sid);
			}
			for(var d=1;d<=main_slides.length;d++)
			{
				if(d == f)
				{
					mainslide_identifier = d-1;
					moveby = -(630 * (parseInt(main_slides[mainslide_identifier])-1));
					break;
				}
			}
			sldc.css('top',moveby);				  
			sflag = main_slides[mainslide_identifier];
			return;
		}
		if(sflag == 1 || sflag == 0)
		{
			sflag = 1;
			return;
		}
		if(main_slides.length == 0)
		{
			createMainSlidesCounter(sid);
		}
		maxflag = sldc.find('.slide-me').length;
		moveby = -(630 * (sflag-1));
		var curpos = moveby;
		moveby = curpos + 630;	
		 
		sldc.css('top',moveby);
		sflag--;
	}
	function createMainSlidesCounter(sid)
	{
		for(var c=1;c<=sid.length;c++)
			{
				if($(sid[c-1]).hasClass('mainslide'))
				{
					main_slides[mtemp] = c;
					mtemp++;
				}
				else{
					sub_slides[stemp] = c;
					stemp++;
				}
			}
			stemp = mtemp = 0;
	}