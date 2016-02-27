	function unrender()
	{
		var selects = document.getElementsByTagName("select");
		var inputs = document.getElementsByTagName("input");
		var input_temp = '';
		
		for(var i=0;i<selects.length;i++)
		{
			select_temp = selects[i].id;
			document.getElementById(select_temp).style.display="inline";
		}
		
		for(var i=0;i<inputs.length;i++)
		{
			input_temp = inputs[i].id;
			if(input_temp.match('render_'))
			{
				document.getElementById(input_temp).style.display="none";
				document.getElementById(input_temp).value = '';
			}
		}
		
	}
	
	
	function render()
	{
		var select_content = new Array();
		var ind = '';
		var select_temp = '';
		var select_ind = '';
		var input_temp = '';
		var selects = document.getElementsByTagName("select");
		var inputs = document.getElementsByTagName("input");
		var input_ids = new Array();
		var j=-1;
		for(var i=0;i<inputs.length;i++)
		{
			input_temp = inputs[i].id;
			if(input_temp.match('render_'))
			{
				input_ids[++j] = inputs[i].id;
				//alert("input_ids["+j+"] :"+input_ids[j]);
			}
		}
		
		for(var i=0;i<selects.length;i++)
		{
			if(input_ids[i].match(selects[i].id))
			{
				select_temp = selects[i].id;
				select_ind = document.getElementById(select_temp).selectedIndex;
				select_temp = document.getElementById(select_temp);
				select_content[i] = select_temp[select_ind].value;
				//alert(select_content[i]);
				select_temp.style.display="none";
				//alert("input_ids["+i+"] :"+input_ids[i]);
				document.getElementById(input_ids[i]).value = select_content[i];
				var len = (select_content[i].length * 6) + 34 ;
				//alert(len);
				document.getElementById(input_ids[i]).style.width=len+'px';
				document.getElementById(input_ids[i]).style.display="inline";
				document.getElementById(input_ids[i]).style.padding = "2px 20px 2px 4px";
			}
		}
	}
