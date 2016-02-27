	var val='';
	
	function g_fun(st)
	{
		val=document.getElementById('data').innerHTML;
		var ind=document.getElementById('g_val').value;
		var x=st;
		var ind2=document.getElementById('g_val2').value;
		var ind3=document.getElementById('g_val3').value;
		var ind4=document.getElementById('g_val4').value;
		var ind5=document.getElementById('g_val5').value;
		var ind6=document.getElementById('g_val6').value;
		var ind7=document.getElementById('g_val7').value;
		var ind8=document.getElementById('g_val8').value;
		var ind9=document.getElementById('g_val9').value;
		
		
		ind2 = (ind2 == 'concat2')?'':ind2+" ";
		ind3 = (ind3 == 'concat3')?'':ind3+" ";
		ind4 = (ind4 == 'concat4')?'':ind4+" ";
		ind5 = (ind5 == 'replace')?'':ind5;
		ind6 = (ind6 == 'end')?'':ind6;
		ind7 = (ind7 == 'limit')?'':ind7;
		ind8 = (ind8 == 'to')?'':ind8;
		ind9 = (ind9 == 'length')?'':ind9;
		if(ind != 'Enter Value')
		{
			switch(x)
			{
				case 1:
				document.getElementById('g_out').innerHTML="strvar.indexOf('"+ind+"'): "+val.indexOf(ind);
				break;
				case 2:
				document.getElementById('g_out').innerHTML="strvar.charAt('"+ind+"'): "+val.charAt(ind);
				break;
				case 3:
				document.getElementById('g_out').innerHTML="strvar.charCodeAt('"+ind+"'): "+val.charCodeAt(ind);
				break;
				case 4:
				document.getElementById('g_out').innerHTML="String.fromCharCode('"+ind+"'): "+String.fromCharCode(ind);
				break;
				case 5:
				ind = ind+" ";
				document.getElementById('g_out').innerHTML="strvar.concat('"+ind+"','"+ind2+"','"+ind3+"','"+ind4+"')"+val.concat(ind,ind2,ind3,ind4);
				break;
				case 6:
				document.getElementById('g_out').innerHTML="strvar.lastIndexOf('"+ind+"'): "+val.lastIndexOf(ind);
				break;
				case 7:
				document.getElementById('g_out').innerHTML="strvar.match('"+ind+"'): "+val.match(ind);
				break;
				case 8:
				document.getElementById('g_out').innerHTML="strvar.replace('"+ind+"','"+ind5+"'): "+val.replace(ind,(ind5 == 'replace')?'':ind5);
				break;
				case 9:
				var txt = new RegExp(ind,"g");
				document.getElementById('g_out').innerHTML="strvar.replace('"+txt+"','"+ind5+"'): "+val.replace(txt,(ind5 == 'replace')?'':ind5);
				break;
				case 10:
				var txt = new RegExp(ind,"i");
				document.getElementById('g_out').innerHTML="strvar.replace('"+txt+"','"+ind5+"'): "+val.replace(txt,(ind5 == 'replace')?'':ind5);
				break;
				case 11:
				var txt = new RegExp(ind,"ig");
				document.getElementById('g_out').innerHTML="strvar.replace('"+txt+"','"+ind5+"'): "+val.replace(txt,(ind5 == 'replace')?'':ind5);
				break;
				case 12:
				document.getElementById('g_out').innerHTML="strvar.search('"+ind+"'): "+val.search(ind);
				break;
				case 13:
				var txt = new RegExp(ind,"i");
				document.getElementById('g_out').innerHTML="strvar.search('"+txt+"'): "+val.search(txt);
				break;
				case 14:
				document.getElementById('g_out').innerHTML="strvar.slice("+ind+","+ind6+"): "+((ind6 == '')?val.slice(ind):val.slice(ind,ind6));
				break;
				case 15:
				document.getElementById('g_out').innerHTML="strvar.split('"+ind+"','"+ind7+"'): "+((ind7 == '')?val.split(ind):val.split(ind,ind7));
				break;
				case 16:
				document.getElementById('g_out').innerHTML="strvar.substring('"+ind+"','"+ind8+"'): "+((ind8 == '')?val.substring(ind):val.substring(ind,ind8));
				break;
				case 17:
				document.getElementById('g_out').innerHTML="strvar.substr('"+ind+"','"+ind9+"'): "+((ind9 == '')?val.substr(ind):val.substr(ind,ind9));
				break;
				case 18:
				document.getElementById('g_out').innerHTML=ind+".toLowerCase(): "+ind.toLowerCase();
				break;
				case 19:
				document.getElementById('g_out').innerHTML=ind+".toUpperCase(): "+ind.toUpperCase();
				break;
				/*case 20:
				document.getElementById('g_out').innerHTML="String.valueOf()('"+ind+"'): "+String.valueOf(ind);
				break;*/
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
		document.getElementById('g_val2').value='concat2';
		document.getElementById('g_val3').value='concat3';
		document.getElementById('g_val4').value='concat4';
		document.getElementById('g_val5').value='replace';
		document.getElementById('g_val6').value='end';
		document.getElementById('g_val7').value='limit';
		document.getElementById('g_val8').value='to';
		document.getElementById('g_val9').value='length';
		
		
		document.getElementById('g_val').style.color='gray';
		document.getElementById('g_val2').style.color='gray';
		document.getElementById('g_val3').style.color='gray';
		document.getElementById('g_val4').style.color='gray';
		document.getElementById('g_val5').style.color='gray';
		document.getElementById('g_val6').style.color='gray';
		document.getElementById('g_val7').style.color='gray';
		document.getElementById('g_val8').style.color='gray';
		document.getElementById('g_val9').style.color='gray';
		
		document.getElementById('g_out').innerHTML='';
	}