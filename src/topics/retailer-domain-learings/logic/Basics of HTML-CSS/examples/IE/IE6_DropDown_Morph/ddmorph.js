// JavaScript Document
/* Month Drop Down  - set_month(month_g,class_g,id_g,name-g){}*/
		function set_month(month_g,class_g,id_g,name_g)
		{
			var month = (!!month_g)? month_g: 13; // Currently Selected Month or Set Month to be Displayed
			var id = (!!id_g)?"id ='"+id_g+"'":'';  // ID of the Month Drop Down
			var classNm = (!!class_g)?"class ='"+class_g+"'":'';  // Class of the Month Drop Down
			var name = (!!name_g)?" name ='"+name_g+"'":'';  // Name of the Month Drop Down
			var months_array = ['Jaasdfasdfasdfn', 'Feb', 'Mar', 'Apr' , 'Mayasdf', 'Jun', ' Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]; // Array containing list of Months
			var setmonth = 0; // Flag to check if the Currently Selected Month is Valid
			var mon = ''; // The Month Drop Down
			if(typeof month == 'string') // Function to Convert String value of Month into integer Equivalents Eg: Nov = 11
			{		
					month = month.substr(0,3); // Retrieves and stores the first three characters of the month variable
					month = month.replace(month.charAt(0),month.charAt(0).toUpperCase()); // Captializes the first character of the month variable
					for(var i=1;i<=12;i++)	
					{
						if(month == months_array[i-1]) // Converts String value of Month into integer Equivalents 
						{
							month = i; 
						}
					}
			}	

			mon = "<select "+id+classNm+name+"><option value='Month'>Month</option>";
			for(var i=1;i<=12;i++)
			{
				mon = mon + "<option value="+months_array[i-1];
				mon = (i == month)?(mon + " selected = 'selected'"): mon ;
				mon = mon + ">"+months_array[i-1]+"</option>";
			}
			mon = mon + "</select>";
			//alert(mon);
			return mon; // Display Month Drop Down in specified section of the web page
			
			
		}
		
		/* Day Drop Down  - set_day(day_g,class_g,id_g,name-g){}*/
		function set_day(day_g,class_g,id_g,name_g)
		{
			var day = (!!day_g && (typeof day_g == 'number'))? day_g: 32; // Currently Selected Day or Set Day to be displayed
			var id = (!!id_g)?"id ='"+id_g+"'":'';  // ID of the Day Drop Down
			var classNm = (!!class_g)?"class ='"+class_g+"'":'';  // Class of the Day Drop Down
			var name = (!!name_g)?" name ='"+name_g+"'":'';  // Name of the Day Drop Down
			var dy = ''; // The Day Drop Down
			dy = "<select "+id+classNm+name+"><option value=Day>Day</option>";
			for(var i=1;i<=31;i++)
			{
				dy = dy + "<option value=";
				dy = dy + ((i<10)? '0'+i : i) ;
				dy = (i == day)?(dy + " selected = 'selected'"): dy;
				dy = (i < 10)? dy +">"+ 0+i : dy +">"+ i; // appends zero for days 1 to 9 Eg: 2 = 02
				dy = dy + "</option>"; 
			}
			dy = dy + "</select>";
			//alert(dy);
			return dy; // Display Day Drop Down in specified section of the web page
		
		}
		
		/* Year Drop Down  - set_year(s_year_g,e_year_g,set_year_g,class_g,id_g,name_g){}*/
		function set_year(s_year_g,e_year_g,set_year_g,class_g,id_g,name_g)
		{
		var s_year = (!!s_year_g && (typeof s_year_g == 'number'))? s_year_g: 1900; // sets the last year to be displayed in the drop down i.e., the year to start from
		var cur_year=new Date();
		var e_year = (!!e_year_g && (typeof e_year_g == 'number'))? e_year_g: cur_year.getFullYear(); // sets the first year to be displayed in the drop down i.e., the year to end or the current year
		var set_year = (!!set_year_g && (typeof set_year_g == 'number'))? set_year_g: (cur_year.getFullYear()+1); // Currently selected year or set year to be selected
		var id = (!!id_g)?"id ='"+id_g+"'":'';  // ID of the Year drop down
		var classNm = (!!class_g)?"class ='"+class_g+"'":'';  // Class of the Year Drop Down
		var name = (!!name_g)?" name ='"+name_g+"'":'';  // Name of the Year drop down
		var yr=''; // The Year Drop Down
		
		yr = "<select "+id+classNm+name+"><option value='Year'>Year</option>";
		for(i=e_year;i>=s_year;i--)
		{
			yr = yr + "<option value="+i;
			yr = (i == set_year)?(yr + " selected = 'selected'"): yr;
			yr = yr + ">"+i+"</option>"; 		
		}
		yr = yr + "</select>";
		//alert(yr);
		return yr; // Display Year Drop Down in specified section of the web page
		}
	
function unrender()
{
	var span_elements = $$(".render_span");
	var select_elements = $$(".render");
	if(span_elements.length != select_elements.length){
		alert("DropDown and Span Tag Mismatch")
		return;
	}
	for(var i=0;i<select_elements.length; i++)
	{
		span_elements[i].parentNode.removeChild(span_elements[i])
		select_elements[i].show();
	}
}
	
	
function render()
{
	var select_elements = $$(".render");
	var span_elements = new Array();
	var dim = '';
	for(var i=0;i<select_elements.length;i++)
	{
		span_elements[i] = new Element('span',{"class":"render_span"});
		span_elements[i].innerHTML = select_elements[i].value;
		select_elements[i].parentNode.insertBefore(span_elements[i], select_elements[i]);
		select_elements[i].hide();
	}
	$$(".overlay")[0].setStyle({display : "block"});

}