	function setdata()
	{
		var e_dat = document.getElementById('data').innerHTML;
		var dt=prompt('Enter your Test Data',e_dat);
		if(dt ==null || dt== undefined || dt=='' || dt== ' ')
			document.getElementById('data').innerHTML = e_dat;
		else
			document.getElementById('data').innerHTML = dt;
	}
	
	function clearr()
	{
		document.getElementById('g_val').value='Enter Value';
		document.getElementById('g_val2').value='anchor';
		document.getElementById('g_val3').value='url';
		
		document.getElementById('g_val').style.color='gray';
		document.getElementById('g_val2').style.color='gray';
		document.getElementById('g_val3').style.color='gray';
	}
	
	function g_fun(st)
	{
		//val=document.getElementById('data').innerHTML;
		var ind=document.getElementById('g_val').value;
		var x=st;
		var ind2=document.getElementById('g_val2').value;
		var ind3=document.getElementById('g_val3').value;
		var ind4=document.getElementById('g_val4').value;
		var ind5=document.getElementById('g_val5').value;
	
		if(ind != 'Enter Value')
		{
			switch(x)
			{
				case 1:
				alert(ind.anchor(ind2));
				document.getElementById('g_out').innerHTML=ind+".anchor('"+ind2+"'): "+ind.anchor(ind2);
				break;
				case 2:
				document.getElementById('g_out').innerHTML=ind+".big(): "+ind.big();
				break;
				case 3:
				document.getElementById('g_out').innerHTML=ind+".bold(): "+ind.bold();
				break;
				case 4:
				document.getElementById('g_out').innerHTML=ind+".blink(): "+ind.blink();
				break;
				case 5:
				document.getElementById('g_out').innerHTML=ind+".fixed(): "+ind.fixed();
				break;
				case 6:
				document.getElementById('g_out').innerHTML=ind+".fontcolor('"+ind4+"'): "+ind.fontcolor(ind4);
				break;
				case 7:
				document.getElementById('g_out').innerHTML=ind+".fontsize("+ind5+"): "+ind.fontsize(ind5);
				break;
				case 8:
				document.getElementById('g_out').innerHTML=ind+".italics(): "+ind.italics();
				break;
				case 9:
				alert(ind.link(ind3));
				document.getElementById('g_out').innerHTML=ind+".link('"+ind3+"'): "+ind.link(ind3);
				break;
				case 10:
				document.getElementById('g_out').innerHTML=ind+".small(): "+ind.small();
				break;
				case 11:
				document.getElementById('g_out').innerHTML=ind+".strike(): "+ind.strike();
				break;
				case 12:
				document.getElementById('g_out').innerHTML=ind+".sub(): "+ind.sub();
				break;
				case 13:
				document.getElementById('g_out').innerHTML=ind+".sup(): "+ind.sup();
				break;
				case 14:
				document.getElementById('g_out').innerHTML=ind+".length: "+ind.length;
				break;
				default:
				document.getElementById('g_out').innerHTML="Instruction failure";
			}
		}
		else
		{
			document.getElementById('g_out').innerHTML = "Enter a Value";
			document.getElementById('g_out').style.color="blue";
		}
	}