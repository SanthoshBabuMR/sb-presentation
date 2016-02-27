// JavaScript Document

function show(id_val,obj,hide)
{
	obj.style.display = "none";
	document.getElementById(id_val).style.display = "";	
	document.getElementById(hide).style.display = "block";	
}

function hide(id_val,obj,show)
{
	obj.style.display = "none";
	document.getElementById(id_val).style.display = "none";	
	document.getElementById(show).style.display = "block";	
}
