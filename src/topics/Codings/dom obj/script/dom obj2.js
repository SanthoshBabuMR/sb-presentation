// JavaScript Document
	function removeItem_Button()
	{
		var temp = document.getElementById('calender_week_dd_changetext');
		temp.remove(temp.selectedIndex);
	}
	
	function changeText_Button()
	{
		var temp = document.getElementById('calender_week_dd_changetext');
		if(document.getElementById('changeTextVal_DD').value == 'Enter Text to Change' || document.getElementById('changeTextVal_DD').value == '')
		{
			alert('No Text Entered.\nAssuming Change text to be "Sample Data"');
			temp[temp.selectedIndex].innerHTML = document.getElementById('changeTextVal_DD').value = 'Sample Data';
		}
		else
		{
		temp[temp.selectedIndex].innerHTML = document.getElementById('changeTextVal_DD').value;
		}
			
	}

	function changeTextOnFocus(obj)
	{
		obj.value = '';
	}
	
	function changeTextOnBlur(obj)
	{
		if(obj.value == '' || obj.value == ' ' || obj.value == 'Enter Text to Change')
		{
			//obj.value = 'SampleData'	;
		}
		
	}

	function captureElement(e)
	{
		var targ;
		if (!e)
		  {
		  var e=window.event;
		  }
		if (e.target)
		  {
		  targ=e.target;
		  }
		else if (e.srcElement)
		  {
		  targ=e.srcElement;
		  }
		if (targ.nodeType==3) // defeat Safari bug
		  {
		  targ = targ.parentNode;
		  }
		var tname;
		tname=targ.tagName;
		alert("You clicked on a " + tname + " element.");

	}
	
	function iedetector()
	{
	if(/MSIE (\d+\.\d+);/.test(navigator.userAgent))
		return true;
	else
		return false;
	}
	
	function createDD(ddparam)
	{
		var temp = '';
		var week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday', 'Saturday']
		var week_val = [00,01,02,03,04,05,06];
		if(ddparam == 'selectedIndex')
		{
			temp += "<select id='calender_week_dd_si' onchange='getSI(this)'>";
		}
		else if(ddparam == 'enabledisable')
		{
			temp += "<select id='calender_week_dd_endi'>";
		}
		else if(ddparam == 'simpledd')
		{
			temp += "<select id='calender_week_dd_endsimpledd'>";
		}
		else if(ddparam == 'changetext')
		{
			temp += "<select id='calender_week_dd_changetext' >";
		}


		temp += "<option>-Select a Week-</option>";
		for(var i=0;i<week.length;i++)
		{
			temp += "<option value='";
			temp += (week_val[i] != null && week_val[i] != '' && week_val[i] != "undefined") ? week_val[i] : '';
			temp += "'>";
			temp += week[i];
			temp += "</option>";
		}
		temp += "</select>";	
		return temp;
	}
	function getSI(val)
	{
		var temp = '';
		var disp = '';
		temp = val.selectedIndex;
		disp += "The SelectedIndex of the DD :"+temp+"\n";
		//temp = val[val.selectedIndex].innerHTML;
		temp = val.options[val.selectedIndex].text;
		disp += "The InnerHTML of the SelectedIndex :"+ temp +"\n";
		temp = val[val.selectedIndex].value;
		disp += "The value of the SelectedIndex :"+ temp +"\n";
		alert(disp);
	}

	function enableDD()
	{
		document.getElementById('calender_week_dd_endi').disabled=false;
	}
	function disableDD()
	{
		document.getElementById('calender_week_dd_endi').disabled=true;
	}
	function createTable(x)
	{
		var temp = '';	
		var N_ROWS = 3;
		var CELLS_PER_ROW = 3;
		if(x == 'simpletable')
		{
			temp += "<table id='simple_table' border='1' cellspacing=3 cellpadding=3 >";
		}
		else if (x == 'borderchangetable')
		{
			temp += "<table id='process_table' border='1' cellspacing=5 cellpadding=6 >";					
		}
		for(var i=0;i<N_ROWS;i++)
		{
			temp += "<tr>";
			for(var j=0;j<CELLS_PER_ROW;j++)
			{
				temp +="<td> Row "+i+" Cell "+j+"</td>";
			}
			temp += "</tr>";
		}
		temp += "</table>";
		return temp;
	}
	
	
	function changetableborder()
	{
		var getinput = prompt("Enter the width to set for the table", "Eg: [1],[5],[7]");
		if(getinput == '' || getinput == ' '|| getinput == "Eg: [1],[5],[7]")
		{
			alert("No Border Width value has been Entered/nBorder width is assumed to be '3'");
			getinput = 3;
		}	
		document.getElementById('process_table').border = getinput;	
	}
	
	function settableframes()
	{
		var getinput = prompt("Enter the frames to set for the table", "Possible Value: [above], [below]");
		if(getinput == '' || getinput == ' '|| getinput == "Possible Value: [above], [below]")
		{
			alert("No value for Frames has been Entered/nFrames is assumed to be 'below'");
			getinput = 'below';
		}	
		document.getElementById('process_table').frame = getinput;	
	}
	function setrules()
	{
		var getinput = prompt("Enter the rules to set for the table", "Possible Value: [rows], [cols]");
		if(getinput == '' || getinput == ' ' || getinput == "Possible Value: [rows], [cols]")
		{
			alert("No value for Rules has been Entered/nrules is assumed to be 'rows'");
			getinput = 'rows';
		}	
		document.getElementById('process_table').rules = getinput;	
	}
	function rowdata()
	{
		var getinput = prompt("Enter the row index from which data has to be fetched", "Possible Value: [0] [1] [2]");
		try
		{
			if(getinput == '' || getinput == ' ' || getinput == "Possible Value: [0] [1] [2]")
			{
				alert("No row index been Entered/nrow index is assumed to be '1'");
				getinput = '1';
			}	
			alert(document.getElementById('process_table').rows[getinput].innerHTML);
		}
		catch(e)
		{
			alert('Row Index doesnot Exist \nTry Again');	
		}
	}
	function celldata()
	{
		var tobj = document.getElementById('process_table');
		var getinputrow = prompt("Enter the row index from which data has to be fetched", "Possible Value: [0] [1] [2]");
		var celldata = '';
		if(getinputrow == '' || getinputrow == ' ' || getinputrow == "Possible Value: [0] [1] [2]")
		{
			alert("No row index been Entered/nrow index is assumed to be '1'");
			getinputrow = '1';
		}
		var getinputcell = prompt("Enter the cell from which data has to be fetched", "Possible Value: [0] [1] [2] ");
		if(getinputcell == '' || getinputcell == ' ' || getinputcell == "Possible Value: [0] [1] [2] ")
		{
			alert("No cell number been Entered/ncell number is assumed to be '5'");
			getinputcell = '1';
		}	
		try{
			if(tobj.rows[getinputrow] != null && tobj.rows[getinputrow] != '' || tobj.rows[getinputrow] != 'undefined')
			{
				celldata = document.getElementById('process_table').rows[getinputrow].cells;
				if(celldata[getinputcell] != null && celldata[getinputcell] != '' && celldata[getinputcell] != 'undefined')
				{
					celldata = "data/info at row ["+getinputrow+"] cell ["+getinputcell+"] : "+ celldata[getinputcell].innerHTML;
					alert(celldata);
				}
				else
				{
					alert('Cell doesnot Exist');	
				}
			}
			else
			{
				alert('Row Index doesnt Exist');	
			}
		}
		catch(e)
		{
			alert('Row Index or Cell Number doesnot Exist \nTry Again');	
		}


	}

	function setcaption()
	{
		
		var getinput = prompt("Enter the caption for the table", "Enter Caption");
		if(getinput == '' || getinput == ' ' || getinput == "Enter Caption")
		{
			alert("No Caption Entered/nAssuming 'Sample Caption' to be the value");
			getinput = 'Sample Caption';
		}	
		document.getElementById('process_table').createCaption().innerHTML = getinput;	
	}	
	
	function deleterow()
	{
		try
		{
			var getinput = prompt("Enter the row index for the table to be Deleted", "Possible values [0] [1] [2]");
			if(getinput == '' || getinput == ' ' || getinput == "Possible values [0] [1] [2]")
			{
				alert("No row index been Entered/nrow index is assumed to be '1'");
				getinput = 1;
			}	
			document.getElementById('process_table').deleteRow(getinput);
		}
		catch(e)
		{
			alert('Try Again');	
		}
	}
	
	function addrow()
	{
		try
		{
			var getinput = prompt("Enter the row index for the table at which the row needs to be added to be added", "Possible values [3] [4] [5]");
			var no_of_cells = '';
			var temp = '';
			if(getinput == '' || getinput == ' ' || getinput == "Possible values [3] [4] [5]")
			{
				alert("No row index been Entered/nrow index is assumed to be '3'");
				getinput = 3;
			}	
			var tobj = document.getElementById('process_table');
			for(var i=0;i<tobj.rows[0].cells.length;i++)
			{
				no_of_cells++;
			}
			tobj = tobj.insertRow(getinput);
			for (var j=0 ;j<no_of_cells;j++)
			{
				temp =	tobj.insertCell(j);
				temp.innerHTML = "New Row "+getinput+" New Cell "+j;
			}
			
		}
		catch(e)
		{
			alert('Try Again');	
		}
	}
	
	function addcell()
	{
		var temp = '';
		var getinputrow = prompt("Enter the row at which the new cell has to be added", "Enter Row Index");
		if(getinputrow == '' || getinputrow == ' ' || getinputrow == "Enter Row Index")
		{
			alert("No row index been Entered/nrow index is assumed to be '2'");
			getinputrow = 2;
		}
		var getinputcell = prompt("Enter the cell index at which the new cell has to be added", "Enter cell Index");
		if(getinputcell == '' || getinputcell == ' ' || getinputcell == "Enter cell Index")
		{
			alert("No row index been Entered/ncell index is assumed to be '1'");
			getinputcell = 1;
		}
		var getinputdata = prompt("Enter data to be inserted into the cell", "Enter Data");
		if(getinputdata == '' || getinputdata == ' ' || getinputdata == "Enter Data")
		{
			alert("No Data Entered/nData is assumed to be 'IPAD'");
			getinputdata = 'IPAD';
		}
		var tobj = document.getElementById('process_table');
		
		try
		{
			for(var i=0;i<tobj.rows.length;i++)
			{
				if(i == getinputrow)
				{
					temp = tobj.rows[i].insertCell(getinputcell);
					temp.innerHTML = getinputdata;
				}
			}
		}
		catch(e)
		{
			alert('try again');	
		}
	}
	
	function changerowspan()
	{
		var temp = '';
		var getinputrow = prompt("Enter the row for which the rowspan has to be applied", "Enter Row Index");
		if(getinputrow == '' || getinputrow == ' ' || getinputrow == "Enter Row Index")
		{
			alert("No row index been Entered/nrow index is assumed to be '0'");
			getinputrow = 0;
		}
		var getinputcell = prompt("Enter the cell index at which the rowspan has to be applied", "Enter cell Index");
		if(getinputcell == '' || getinputcell == ' ' || getinputcell == "Enter cell Index")
		{
			alert("No row index been Entered/ncell index is assumed to be '0'");
			getinputcell = 0;
		}
		var rowspandata = prompt("Enter rowspan to be applied to the cell", "Enter rowspan");
		if(rowspandata == '' || rowspandata == ' ' || rowspandata == "Enter rowspan")
		{
			alert("No Data Entered/nData is assumed to be '3'");
			rowspandata = 3;
		}
		var tobj = document.getElementById('process_table');
		
		try
		{
			temp = tobj.rows[getinputrow].cells;
			temp[getinputcell].rowSpan = rowspandata;
		}
		catch(e)
		{
			alert('try again');	
		}
	}