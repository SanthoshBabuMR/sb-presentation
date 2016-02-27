// JavaScript Document

/* -------------- Declaration and Initialization Section begin -------------- */

	var lastPageCount = '';
	var NUMBER_OF_IMAGES_IN_GRID = 8; // specifies the maximum number of images to be display
	var MAX_IMAGE = 40;//Total Number of Images
/* -------------- Declaration and Initialization Section end -------------- */


/* -------------- Function Definition Section begin -------------- */

/* >>>>> ImageLoader Section Function begin <<<<< */

	function imageLoader()
	{
		var disp_image = '';// Outputs the Image Grid to the Web page
		var count = 0;// Counter to restrict the number of images displayed per Image Grid
		var temp_count = ''; // Used in combination with the 'count' variable to restrict the number of images displayed per Image Grid. It is used to identify the presence of 'dot' in the 'count' variable. In other words, it identifies if 'count' variable is a float type varibale
		var IMAGES_DISPLAYED_IN_GRID = '';
		var temp_loc = '';
		lastPageCount = evalLastPageCount();
		disp_image = "<div id='imgGridSection'>";
		for(var i=0;i<MAX_IMAGE;i++,count++) 
		{	
			if(NUMBER_OF_IMAGES_IN_GRID >0)
			{
				temp_count = (count/NUMBER_OF_IMAGES_IN_GRID).toString();
			}
			if(temp_count.indexOf('.') == -1 && temp_count != "0")
			{
				break;// When 'count' variable cotains a float type string, it breaks the loop
			}
			temp_loc = "images/img/set0/"+i+".jpg";
			disp_image += "<img src='"+temp_loc+"' class='imgset' height='150' width='200' />";	
			IMAGES_DISPLAYED_IN_GRID++;
		}
		disp_image += "</div>";
		disp_image += "<div id='imgnxtprelink'>";
		
		if(count<MAX_IMAGE)
		{
			disp_image += "<p class='imgnext'>";
			disp_image += "<a href='#' onclick='nxtImageLoader("+count+","+NUMBER_OF_IMAGES_IN_GRID+","+MAX_IMAGE+")'>Next</a>";
			disp_image += "<a href='#' onclick='nxtImageLoader("+lastPageCount+","+NUMBER_OF_IMAGES_IN_GRID+","+MAX_IMAGE+")'>Last</a>";
			disp_image += "</p>";
		}
		
		//if((MAX_IMAGE >= count) && (NUMBER_OF_IMAGES_IN_GRID != count) && (NUMBER_OF_IMAGES_IN_GRID < MAX_IMAGE))
		if(NUMBER_OF_IMAGES_IN_GRID<count)
		{
			disp_image += "<p class='imgpre'>";
			disp_image += "<a href='#' onclick='preImageLoader("+count+","+NUMBER_OF_IMAGES_IN_GRID+","+MAX_IMAGE+","+IMAGES_DISPLAYED_IN_GRID+")'>Previous</a>";
			disp_image += "<a href='#' onclick='preImageLoader("+count+","+NUMBER_OF_IMAGES_IN_GRID+","+MAX_IMAGE+","+IMAGES_DISPLAYED_IN_GRID+")'>First</a>";
			disp_image += "</p>";
		}
		

		disp_image += "</div>";
		document.write(disp_image);
	}
	
	function nxtImageLoader(count,NUMBER_OF_IMAGES_IN_GRID,MAX_IMAGE)
	{	
		var imgGridNode = document.getElementById('imgGridSection');
		var imgnxtprelinkNode = document.getElementById('imgnxtprelink');
		var disp_image = "";
		var disp_imgnxtprelink = "";
		var INITIAL_COUNT = count;
		var temp_loc = '';
		lastPageCount = evalLastPageCount();
		var i = '';
		for(i=count,IMAGES_DISPLAYED_IN_GRID = '';i<MAX_IMAGE;i++,count++) 
		{	
			if(NUMBER_OF_IMAGES_IN_GRID >0)
			{
				temp_count = (count/NUMBER_OF_IMAGES_IN_GRID).toString();
			}
			if(temp_count.indexOf('.') == -1)
			{
				if(i != INITIAL_COUNT)
				break;// When 'count' variable cotains a float type string, it breaks the loop
			}
			temp_loc = "images/img/set0/"+i+".jpg";
			disp_image += "<img src='"+temp_loc+"' class='imgset' height='150' width='200' />";
			IMAGES_DISPLAYED_IN_GRID++;
		}
		if(count<MAX_IMAGE)
		{
			disp_imgnxtprelink = "<p class='imgnext'>";
			disp_imgnxtprelink += "<a href='#' onclick='nxtImageLoader("+count+","+NUMBER_OF_IMAGES_IN_GRID+","+MAX_IMAGE+")'>Next</a>";
			disp_imgnxtprelink += "<a href='#' onclick='nxtImageLoader("+lastPageCount+","+NUMBER_OF_IMAGES_IN_GRID+","+MAX_IMAGE+")'>Last</a>";
			disp_imgnxtprelink += "</p>";
		}
		
		if((MAX_IMAGE==count) || (MAX_IMAGE > count) && (NUMBER_OF_IMAGES_IN_GRID != count))
		{
			disp_imgnxtprelink += "<p class='imgpre'>";
			disp_imgnxtprelink += "<a href='#' onclick='preImageLoader("+NUMBER_OF_IMAGES_IN_GRID+","+NUMBER_OF_IMAGES_IN_GRID+","+MAX_IMAGE+",0)'>First</a>";
			disp_imgnxtprelink += "<a href='#' onclick='preImageLoader("+count+","+NUMBER_OF_IMAGES_IN_GRID+","+MAX_IMAGE+","+IMAGES_DISPLAYED_IN_GRID+")'>Previous</a>";
			disp_imgnxtprelink += "</p>";
		}
		
		imgnxtprelinkNode.innerHTML = disp_imgnxtprelink;
		imgGridNode.innerHTML = disp_image;
	}

	function preImageLoader(count,NUMBER_OF_IMAGES_IN_GRID,MAX_IMAGE,IMAGES_DISPLAYED_IN_GRID)
	{	
		var imgGridNode = document.getElementById('imgGridSection');
		var imgnxtprelinkNode = document.getElementById('imgnxtprelink');
		var disp_image = "";
		var disp_imgnxtprelink = "";
		var temp_loc = '';
		var preEndImgLoc = count - IMAGES_DISPLAYED_IN_GRID;
		var preStartImgLoc = preEndImgLoc - NUMBER_OF_IMAGES_IN_GRID; 
		count = count - IMAGES_DISPLAYED_IN_GRID;
		lastPageCount = evalLastPageCount();
		var i = '';
		
		for(i=preStartImgLoc,IMAGES_DISPLAYED_IN_GRID = '';i<preEndImgLoc;i++) 
		{	
			temp_loc = "images/img/set0/"+i+".jpg";
			disp_image += "<img src='"+temp_loc+"' class='imgset' height='150' width='200' />";	
			IMAGES_DISPLAYED_IN_GRID++;
		}
		
		if(count<MAX_IMAGE)
		{
			disp_imgnxtprelink = "<p class='imgnext'>";
			disp_imgnxtprelink += "<a href='#' onclick='nxtImageLoader("+count+","+NUMBER_OF_IMAGES_IN_GRID+","+MAX_IMAGE+")'>Next</a>";
			disp_imgnxtprelink += "<a href='#' onclick='nxtImageLoader("+lastPageCount+","+NUMBER_OF_IMAGES_IN_GRID+","+MAX_IMAGE+")'>Last</a>";
			disp_imgnxtprelink += "</p>";
		}
		
		if((MAX_IMAGE==count) || (MAX_IMAGE > count) && (NUMBER_OF_IMAGES_IN_GRID != count))
		{
			disp_imgnxtprelink += "<p class='imgpre'>";
			disp_imgnxtprelink += "<a href='#' onclick='preImageLoader("+NUMBER_OF_IMAGES_IN_GRID+","+NUMBER_OF_IMAGES_IN_GRID+","+MAX_IMAGE+",0)'>First</a>";
			disp_imgnxtprelink += "<a href='#' onclick='preImageLoader("+count+","+NUMBER_OF_IMAGES_IN_GRID+","+MAX_IMAGE+","+IMAGES_DISPLAYED_IN_GRID+")'>Previous</a>";
			disp_imgnxtprelink += "</p>";
		}
		
		imgnxtprelinkNode.innerHTML = disp_imgnxtprelink;
		imgGridNode.innerHTML = disp_image;
	}	

	
	function evalLastPageCount()
	{
		var lastPageCount = ((MAX_IMAGE/NUMBER_OF_IMAGES_IN_GRID)).toString();
		if(lastPageCount.indexOf('.') == -1 && lastPageCount != "0")
		{
			lastPageCount = parseInt(lastPageCount)-1;
		}
		else
		{
			lastPageCount = parseInt(lastPageCount);
		}
		return lastPageCount *= NUMBER_OF_IMAGES_IN_GRID; 
	}
/* >>>>> ImageLoader Section Function end <<<<< */

/* -------------- Function Definition Section end -------------- */
