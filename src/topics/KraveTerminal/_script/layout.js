// JavaScript Document

/* -------------- Declaration and Initialization Section begin -------------- */

/* ===== Global Section Declaration and Initialization begin ===== */

var _g_currentParent = null;
var _g_currentChild = null;
var _g_currentPage = null;

/* ===== Global Section Declaration and Initialization end ===== */

/* ===== Header Section Declaration and Initialization begin ===== */

/* ===== Header Section Declaration and Initialization end ===== */

/* ===== Footer Section Declaration and Initialization begin ===== */



/* ===== Footer Section Declaration and Initialization end ===== */

/* -------------- Declaration and Initialization Section end -------------- */


/* -------------- Function Calls begin -------------- */



/* -------------- Function Calls end -------------- */


/* -------------- Function Definition Section begin -------------- */

/* >>>>> Header Section Function begin <<<<< */

function _headerSection()
{
	if(!json.header.nav || !_g_currentParent || !_loadComplete())
	{
		return;
	}
	var header_display = new Array();
	var activeLink = _g_currentParent;
	var relative_path = (activeLink == "root")? "":"../";
	header_display.push("<div class='masthead'>");
	header_display.push("<ul class='headnav'>");
	var header_display_temp = '';
	//header_display_temp += "<li class='llogo'>";
	//header_display_temp += "<a href='"+relative_path+json.header.nav[0].linkTo+"'";
	//header_display_temp += (activeLink == json.header.nav[0].activeLink)? " class='logo currentselected'>":" class='logo'>";				
	//header_display_temp += json.header.nav[0].label+"</a>";
	//header_display_temp += "</li>";	
	//header_display.push(header_display_temp);
	//header_display_temp = '';
	for(var i=0;i<json.header.nav.length;i++)
	{
		if((json.header.nav[i].enabled==false) && json.header.nav[i].activeLink==activeLink)
		{
			window.location.href='../index.html';
		}
		if(json.header.nav[i].enabled)
		{
			header_display_temp += "<li>";
			header_display_temp += "<a href='";
			header_display_temp += relative_path + ((activeLink == "root")? (json.header.nav[i].linkTo):(json.header.nav[i].linkTo))+"'";
			if(i == 0)
			{
				header_display_temp += (activeLink == "about")? " class='currentselected'":"";
			}
			header_display_temp += (activeLink == json.header.nav[i].activeLink)? " class='currentselected'>":">";
			header_display_temp += json.header.nav[i].label+"</a>";
			header_display_temp += "</li>";
		}
		header_display.push(header_display_temp);
		header_display_temp = '';
	}
	header_display.push("</ul>");
	header_display.push("</div>");	
	header_display_temp += "<div class='site-label'><a href='"+relative_path+"index.html'";
	//header_display_temp += (activeLink == "root")? " class='labelselected'":"";
	header_display_temp += ">KraveUpon</a></div>";
	header_display.push(header_display_temp);
	header_display_temp = '';
	header_display.push("<div class='site-logo'>");
	header_display.push("<a href='"+relative_path+"index.html'>");
	header_display.push("<image src='"+relative_path+"_images/logoo.gif' width='176px' height='56px' style='border:none' />");
	header_display.push("</a></div>");
	header_display = header_display.join("");
	document.write(header_display);
	header_display = null;
}

/* >>>>> Header Section Function end <<<<< */

/* >>>>> Footer Section Function begin <<<<< */

function _footerSection()
{
	if(!json.footer.nav || !json.footer.copyright || !_loadComplete())
	{
		return;
	}
	var footer_display = new Array();
	var footer_display_temp = '';
	var activeLink = _g_currentParent;
	footer_display.push("<ul class='footernav'>");
	for(var i=0;i<json.footer.nav.length;i++)
	{
		footer_display_temp += "<li>";
		footer_display_temp += "<a href='";
		footer_display_temp += ((activeLink == "root")? (json.footer.nav[i].linkTo):("../"+json.footer.nav[i].linkTo))+"'>";
		footer_display_temp += json.footer.nav[i].label+"</a>";
		footer_display_temp += "</li>";
		footer_display.push(footer_display_temp);
		footer_display_temp = '';
	}
	footer_display.push("<li class='copyright'>");
	footer_display.push(json.footer.copyright);
	footer_display.push("</li>");
	footer_display.push("</ul>");
	footer_display.push("<div style='clear:both; height:20px'></div>");	
	footer_display = footer_display.join("");
	document.write(footer_display);
	footer_display = null;
}

/* >>>>> Footer Section Function end <<<<< */

/* >>>>> Body Section Function begin <<<<< */

function _bodySectionTop()
{
	document.write("<input type='hidden' value='loadComplete' id='loadComplete' name='loadComplete' />");
}

function _bodySectionBottom()
{
	
}

/* >>>>> Body Section Function end <<<<< */

/* >>>>> MainContent Section Function begin <<<<< */

function _maincontentSectionTop()
{
	//document.write('Main Content Section Top');
}

function _maincontentSectionBottom()
{
	//document.write('Main Content Section Bottom');
}

/* >>>>> MainContent Section Function end <<<<< */

/* >>>>> LiftSideBar Section Function begin <<<<< */

function _ltsidebarSectionTop()
{
	//document.write('Left Side Bar Top');
}

function _ltsidebarSectionBottom()
{
	//document.write('Left Side Bar Bottom');
}

/* >>>>> LiftSideBar Section Function end <<<<< */

/* >>>>> RightSideBar Section Function begin <<<<< */

function _rtsidebarSectionTop()
{
	//document.write('Right Side Bar Top');
}
function _rtsidebarSectionBottom()
{
	//document.write('Right Side Bar Bottom');
}

/* >>>>> RightSideBar Section Function end <<<<< */

/* >>>>> Global Section Function begin <<<<< */

function setRelativePath()
{
	
}

function _setGlobalParam(_parentnode,_childnode,_pageid)
{
	_g_currentParent = _parentnode;
	_g_currentChild = _childnode;
	_g_currentPage = _pageid;
}

function _loadComplete()
{
	if(document.getElementById("loadComplete"))
	{
		var loaded = document.getElementsByName("loadComplete");
		if(loaded.length == 1)
		{
			return true;
		}
		return false;
	}
}

/* >>>>> Global Section Function end <<<<< */

/* -------------- Function Definition Section end -------------- */
