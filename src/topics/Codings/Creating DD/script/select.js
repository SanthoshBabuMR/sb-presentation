/*function createDD(id_k){}*/
		function createDD(id_k) // Function to Create a Drop Down using select tag
		{
			var dd = ''; // The Drop Down
			var s_id = id_k; // The Id of the Drop Down
			dd = "<select onChange=\"getDDIndex('"+s_id+"');\" id='"+s_id+"'><option value='select'>-select-</option>";
			var day = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
			if(s_id=='dropdown_one')
			{
				var day_value = ['Monday','Tueday','Wednesday','Thursday','Friday','Saturday','Sunday'];		
			}
			else if(s_id='dropdown_two')
			{
				var day_value = ['Day - 1','Day - 2','Day - 3','Day - 4','Day - 5','Day - 6','Day - 7'];
			}		
			for(var i=1;i<=7;i++)
			{
				dd = dd + "<option value='"+day[i-1]+"'>"+day_value[i-1]+"</option>";	
			}
			dd = dd + "</select>";
			//alert(dd);
			if(s_id=='dropdown_one')
			{
				document.getElementById('dd_area').innerHTML=dd;
			}
			else if(s_id='dropdown_two')
			{
				document.getElementById('dd_area2').innerHTML=dd;
			}
		}
		
		/*function getDDIndex(idi){}*/
		function getDDIndex(idi) // function to return selectedIndex, selectedIndex value, Drop Down Value
		{
			//alert(idi);
			var s_ind = document.getElementById(idi).selectedIndex; // Returns the selectedIndex of the drop down - always a integer number starting from zero
			var s_ind_val = document.getElementById(idi)[s_ind].value; // Returns the selectedIndex Value of the drop down
			/* 
			The following are equal and the same : 
			document.getElementById('dropdown')[s_ind].value = document.getElementById('dropdown').value
			*/
			var val = document.getElementById(idi)[s_ind].innerHTML; // Returns the actual Drop Down Display Value
			
			if(idi == 'dropdown_one')
			{
				document.getElementById('dd_index').innerHTML = "<strong>SelectedIndex = </strong>"+s_ind+";<br /><strong>SelectedIndex Value = </strong>"+s_ind_val+";<br /><strong>DropDown Display Value = </strong>"+val+";";
			}
			else if(idi == 'dropdown_two')
			{
				document.getElementById('dd_index2').innerHTML = "<strong>SelectedIndex = </strong>"+s_ind+";<br /><strong>SelectedIndex Value = </strong>"+s_ind_val+";<br /><strong>DropDown Display Value = </strong>"+val+";";
			}
		}
		
		/*function dd_change(id_ss){}*/
		function dd_change(id_ss) // function to set drop down using another drop down's value
		{
			if(document.getElementById('dropdown_one') == null)
			{
				alert("Please Create Drop Down One");
				return;
			}
			if(document.getElementById('dropdown_two') == null)
			{
				alert("Please Create Drop Down Two");
				return;
			}
			if(id_ss == 'dropdown_one')
			{
				if(document.getElementById('dropdown_one').selectedIndex == 0)
				{
					document.getElementById('dd_index2').innerHTML = '<i>Please Choose a Value from Drop Down One</i>';
					return;
				}
				var id_len = document.getElementById('dropdown_two').length;
				for(var i=0;i<id_len;i++)
				{
					if(document.getElementById('dropdown_two')[i].value == document.getElementById('dropdown_one')[document.getElementById('dropdown_one').selectedIndex].value)
					{
						document.getElementById('dropdown_two').selectedIndex=i;
						document.getElementById('dd_index2').innerHTML = ' Value Updated From Drop Down One';
						break;
					}
				}
			}
			else if(id_ss == 'dropdown_two')
			{
				if(document.getElementById('dropdown_two').selectedIndex == 0)
				{
					document.getElementById('dd_index').innerHTML = '<i>Please Choose a Value from Drop Down Two</i>';
					return;
				}
				var id_len = document.getElementById('dropdown_one').length;
				for(var i=0;i<id_len;i++)
				{
					if(document.getElementById('dropdown_one')[i].value == document.getElementById('dropdown_two')[document.getElementById('dropdown_two').selectedIndex].value)
					{
						document.getElementById('dropdown_one').selectedIndex=i;
						document.getElementById('dd_index').innerHTML = ' Value Updated From Drop Down Two';
						break;
					}
				}
					
			}

		}