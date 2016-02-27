
var color_store = ['#963', '#363', '#885', '#C33', '#363', '#EE4', '#421'];

function dom_obj(elementid, divid, param, onclickturnonoff, Event)
{
	if(onclickturnonoff == '1' || onclickturnonoff == 'mousedown0')
	{
		elementid.onclick = '';
	}
	elementid.style.color = "#544C00";
	var node = elementid.parentNode;
	var containerid = document.getElementById(divid);
	
	//var input = document.createElement('input');
	var input = document.createElement('span');
	//input.type = "text";
	//input.readOnly = 'true';
	input.className = "processOutput";
	
	var clear = document.createElement('input');
	clear.type = "button";
	clear.value = "clear";
	
	switch(param)
	{
		case 'current_div_anchors':
		{
			var obj = containerid;
			var j = 0;
			obj = obj.getElementsByTagName('a');
			for(var i=0;i<obj.length;i++)
			{
				if(obj[i].name != "")
				{
					j++;	
					obj[i].className = "outputhighlighter";	
					obj[i].style.color = color_store[i];
				}
			}
			obj = j;
			break;
		}
		case 'all_anchor':
		{
			var obj = document.anchors;
			for(var i=0;i<obj.length;i++)
			{
				obj[i].className = "outputhighlighter";	
				obj[i].style.color = color_store[i];
			}
			obj = obj.length;
			break;
		}
		case 'all_anchor_text':
		{
			var obj = document.anchors[0];
			obj.className = "outputhighlighter";	
			obj.style.color = color_store[0];
			obj = obj.innerHTML;
			break;
		}		
		case 'all_forms':
		{
			var obj = document.forms;
			for(var i=0;i<obj.length;i++)
			{
				obj[i].className = "outputhighlighter";	
				obj[i].style.color = color_store[i];
			}
			obj = obj.length;
			break;
		}
		case 'all_images':
		{
			var obj = document.images;
			for(var i=0;i<obj.length;i++)
			{
				obj[i].className = "outputhighlighter";	
				obj[i].style.color = color_store[i];
			}
			obj = obj.length;
			break;
		}
		case 'all_id_images':
		{
			var obj = document.images;
			var temp = '';
			var j = 0;
			for(var i=0;i<obj.length;i++)
			{
				obj[i].className = "outputhighlighter";	
				obj[i].style.color = color_store[i];
				temp += "[ID "+[++j]+"]"+ ((obj[i].id != '' && obj[i].id != null && obj[i].id != "undefined" ) ? obj[i].id : "Undefined");
				if(i != obj.length-1)
				{
					temp = temp + ", ";
				}
			}
			obj = temp; 
			break;
		}
		case 'all_links':
		{
			var obj = document.links;
			for(var i=0;i<obj.length;i++)
			{
				obj[i].className = "outputhighlighter";	
				obj[i].style.color = color_store[i];
			}
			obj = obj.length; 
			break;
		}
		case 'cookie_info':
		{
			var obj = document.cookie;
			if(obj == '' || obj == null || obj == "undefined")
			{
				obj = "No Cookie Info Available";	
			}
			break;
		}
		case 'domain_info':
		{
			var obj = document.domain;
			if(obj == '' || obj == null || obj == "undefined")
			{
				obj = "No Domain Info Available";	
			}
			break;
		}	
		case 'lastModified_info':
		{
			var obj = document.lastModified;
			if(obj == '' || obj == null || obj == "undefined")
			{
				obj = "No Info available on Document date last modified";	
			}
			break;
		}	
		case 'referrer_info':
		{
			var obj = document.referrer;
			if(obj == '' || obj == null || obj == "undefined")
			{
				obj = "No Referrer Document";	
			}
			break;
		}	
		case 'title_info':
		{
			var obj = document.title;
			if(obj == '' || obj == null || obj == "undefined")
			{
				obj = "No Title has been specified ";	
			}
			break;
		}	
		case 'url_info':
		{
			var obj = document.URL;
			if(obj == '' || obj == null || obj == "undefined")
			{
				obj = "No URL";	
			}
			break;
		}
		case 'output_stream':
		{
			var obj = document.open("text/html","replace");
			var txt = "<html><body>Hello World</body></html>";
			obj.write(txt);
			obj.close();
			break;
		}	
		case 'window_output_stream':
		{
			var obj = window.open();
			obj.document.open();
			var txt = "<html><body>Hello World</body></html>";
			obj.document.write(txt);
			obj.document.close();
			break;
		}
		case 'this_keyword':
		{
			var obj = '';
			obj += "[this.id ="+((elementid.id == '' || elementid.id == null || elementid.id == "undefined") ? "Not Specified" : elementid.id)+";] ";
			obj += "[this.className ="+((elementid.className == '' || elementid.className == null || elementid.className == "undefined") ? "Not Specified" : elementid.className)+";] ";
			obj += "[this.onclick ="+((elementid.onclick == '' || elementid.onclick == null || elementid.onclick == "undefined") ? "Not Specified" : elementid.id)+";] ";
			break;
		}	
		case 'name_search':
		{
			var temp = prompt("Enter name of element to search", "Eg:[simple_link] [CTS] [dummy-link1] [dummy-link2] [dummy-link3] [Details] [Contact]");
			if (temp == "Eg:[simple_link] [CTS] [dummy-link1] [dummy-link2] [dummy-link3] [Details] [Contact]"  || temp =='' || temp == ' ')
			{
				alert("No 'Name' Specified. \nAssuming 'Name' to be [simple_link] and searching");
				temp = 'simple_link';
			}
			obj = "Number of element with name attribute "+temp+" is "+document.getElementsByName(temp).length;
			break;
		}
		case 'tagname_search':
		{
			var temp = prompt("Enter HTML element to search", "Eg:[body] [div] [p] [a]");
			if (temp == "Eg:[body] [div] [p] [a]" || temp =='' || temp == ' ')
			{
				alert("No 'HTML Element' Specified. \nAssuming 'HTML Element' to be [div] and searching");
				temp = 'div';
			}
			obj = "Number of HTML element ["+temp+"] is "+document.getElementsByTagName(temp).length;
			break;
		}		
		case 'subanchor_images':
		{
			var obj = document.getElementById('img_planets').useMap;
			break;
		}	
		case 'coord_imagemap':
		{
			var obj = document.images;
			var temp = '';
			var tempnode = '';
			var coords = '';
			for (var i=0;i<obj.length;i++)
			{
				if(obj[i].useMap != ''	&& obj[i].useMap !=  null && obj[i].useMap != "undefined")
				{
					obj[i].useMap = obj[i].useMap.substring(1); //removes #
					temp = document.getElementsByName(obj[i].useMap);
					for(var ii=0;ii<temp.length;ii++)
					{
						for(var j=0;j<temp[ii].childNodes.length; j++)
						{
							if(temp[ii].childNodes[j].coords != '' && temp[ii].childNodes[j].coords != null && temp[ii].childNodes[j].coords != "undefined")
							{
							coords += "Co-ordinates for the Image  : ["+obj[i].id+"] with Map ["+temp[ii].name+"] "+temp[ii].childNodes[j].coords +"   " ;
							}
						}
					}
				}
			}
			obj = coords;			
			break;
		}		
		case 'querystring_info':
		{
			var obj = document.URL.search;
			break;
		}
		case 'button_formid':
		{
			var obj = (elementid.form.id != '' && elementid.form.id != null && elementid.form.id != "undefined" ) ? elementid.form.id : 'ID Undefined';
			break;
		}		
		case 'event_buttonclick':
		{
			var obj = '';
			if (iedetector())
			{
				if(Event.button == 1)
				{
					obj = 'Left Mouse Button was Clicked';
				}
				else if (Event.button == 2)
				{
					obj = 'Right Mouse Button was Clicked';
				}
				else if (Event.button == 4)
				{
					obj = 'Middle Mouse Button was Clicked';
				}				
			}
			else
			{
				if(Event.which == 1)
				{
					obj = 'Left Mouse Button was Clicked';
				}
				else if (Event.which == 2)
				{
					obj = 'Middle Mouse Button was Clicked';
				}				
				
				else if (Event.which == 3)
				{
					obj = 'Right Mouse Button was Clicked';
				}
			}
			
			break;
		}
		case 'event_keycode':
		{
			obj = Event.keyCode;
			var temp = '';
			if(obj == 17)
			{
				temp= 'ctrl';
			}
			else if(obj == 13)
			{
				temp= 'Enter';
			}
			else if(obj == 18)
			{
				temp = 'alt'	
			}
			else if(obj == 9)
			{
				temp = 'tab';	
			}
			else if(obj == 16)
			{
				temp = 'shift';	
			}	
			else if(obj == 20)
			{
				temp = 'CAPS';	
			}	
			else if(obj == 116)
			{
				temp = 'F5';	
			}	
			else if(obj == 144)
			{
				temp = "num lock";	
			}
			else if(obj == 44)
			{
				temp = "print screen";	
			}
			else if(obj == 145)
			{
				temp = "scroll lock";	
			}
			else if(obj == 19)
			{
				temp = "pause break";	
			}
			else if(obj == 91)
			{
				temp = "Windows";	
			}			
			else if(obj == 93)
			{
				temp = "rightclick keyboard select";	
			}
			else if(obj == 27)
			{
				temp = "escape";	
			}
			else if(obj == 32)
			{
				temp = "space";	
			}	
			else if(obj == 33)
			{
				temp = "page up";	
			}
			else if(obj == 34)
			{
				temp = "page down";	
			}
			else if(obj == 35)
			{
				temp = "end";	
			}
			else if(obj == 36)
			{
				temp = "home";	
			}
			else if(obj == 45)
			{
				temp = "insert";	
			}
			else if(obj == 46)
			{
				temp = "delete";	
			}
			else if(obj == 8)
			{
				temp = "backspace";	
			}			
			else
			{
				temp = document.getElementById('keyevent_textarea').value;
				alert(temp);
				temp = temp.substring((temp.length - 1),temp.length);alert(temp);
			}
			
			var temp ="KeyCode for Character ["+temp+ "] ";
			obj = temp + obj;
			break;
		}
		case 'coords_cursor':
		{
			var obj = '';
			obj += "x :"+Event.screenX;
			obj += "; y :"+Event.screenY+";";
			break;
		}
		case 'screen_coords_cursor':
		{
			var obj = '';
			obj += "x :"+Event.clientX;
			obj += "; y :"+Event.clientY+";";
			break;
		}	
		case 'call_identifyelement':
		{
			var obj = '';
			//document.body.onmousedown = "dom_obj(this,'events_div','identifyelement','0',event)";
			if(iedetector())
			{
				document.body.onmousedown = captureElement(event);
			}
			else
			{
				document.body.setAttribute("onmousedown","captureElement(event)");
				//alert(document.body.getAttribute("onmousedown"));
			}
			
			obj = "Click on any part of the page, the corresponding element will be shown in alert"
			break;
			
		}

		case 'week_dropdown':
		{
			var obj = '';
			obj = createDD('simpledd');
			break;	
		}
		case 'week_dropdown_selectedindex':
		{
			var obj = '';
			obj = createDD('selectedIndex');
			break;	
		}
		case 'week_dropdown_enabledisable':
		{
			var obj = '';
			obj += createDD('enabledisable');
			obj += "<br />";
			obj += "<input type='button' value='enable' onclick='enableDD()'>";
			obj += "<input type='button' value='disable' onclick='disableDD()'>";
			break;	
		}
		case 'week_dropdown_changetext':
		{
			var obj = '';
			var temp = '';
			obj +="<br />";
			obj += createDD('changetext');
			obj += "<br />";
			obj += "<input type='text' id='changeTextVal_DD' value='Enter Text to Change' onClick='changeTextOnFocus(this)' onFocus='changeTextOnFocus(this)' onBlur='changeTextOnBlur(this)'>";
			obj += "<input type='button' value='Change Text' onclick='changeText_Button()' /><br />";
			obj += "<input type='button' value='Remove Item' onclick='removeItem_Button()' />";
			obj +="<br />";
			break;
		}
		case 'simple_table':
		{
			var obj ='';
			obj = createTable('simpletable');
			break;
		}
		case 'process_table':
		{
			var obj ='';
			obj += createTable('borderchangetable');
			obj += "<br /><input type='button' value='Change border' onclick='changetableborder()'/><br />"
			obj += "<br /><input type='button' value='Set Frames' onclick='settableframes()'/><br />"
			obj += "<br /><input type='button' value='Set Rules' onclick='setrules()'/><br />"	
			obj += "<br /><input type='button' value='Get InnerHTML of a Row' onclick='rowdata()'/><br />"	
			obj += "<br /><input type='button' value='Get InnerHTML of a cell' onclick='celldata()'/><br />"	
			obj += "<br /><input type='button' value='Set Caption' onclick='setcaption()'/><br />"
			obj += "<br /><input type='button' value='Delete Rows' onclick='deleterow()'/><br />"
			obj += "<br /><input type='button' value='Add Rows' onclick='addrow()'/><br />"
			obj += "<br /><input type='button' value='Add Cells' onclick='addcell()'/><br />"
			obj += "<br /><input type='button' value='Change Colspan' onclick='changerowspan()'/><br />"
			alert("Click Ok to view created Table");			
			break;
		}
		default:
			alert("Incorrect Selection");
	
	}
	if(obj != '' && obj != null && obj !="undefined")
	{
		obj = obj.toString();
		//charlength = (obj.length*8) + 23;
		//input.style.width = charlength+"px";
		//input.value = "> "+obj+" <";
		input.innerHTML = "<br />> "+obj+" <<br />";
		node.appendChild(input);
	}

	input = '';
	//node.appendChild(clear);
}

