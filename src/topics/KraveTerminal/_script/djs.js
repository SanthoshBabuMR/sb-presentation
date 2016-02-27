// JavaScript Document

/**
Container for all functions and variables.
@namespace djs
*/
var djs = {};

/**
Writes a blank paragraph to the page. Used for vertical spacing purposes. Provided for convenience and coding speed.
@function djs.bl
*/
djs.bl = function(){ //blank line
	document.write('<p>&nbsp;</p>');
};

/**
Writes a line break to the page. Used for vertical spacing purposes. Provided for convenience and coding speed.
@function djs.br
*/
djs.br = function(){ //line break
	document.write("<br />");
};

/**
Write the text to the page.
@function djs.echo
@param {string} txt The Text to write to the page
*/
djs.echo = function(txt){
	document.write(txt);
};

/**
Write a paragraph to the page. Provided for convenience and speed of coding.
@function djs.p
@param {string} txt The Text to be enclosed within a paragraph
*/
djs.p = function(txt){
	document.write('<p>'+txt+'</p>');
};

/**
displays an alert, if the number of arguments and number of parameters of the specified function differs.
@function djs.argLengthCheck
@param {object} func_name The function to verify, the length of its arguments and the length of its actual parameters
*/
djs.argLengthCheck = function (func_name){
	var functionName = func_name;
	functionName = functionName.substring(((functionName.indexOf("function ")+8)),(functionName.indexOf("("))) + "()";
	if(func_name.arguments.length != func_name.length)
	{
		alert("Incorrect Number of Arguments in Function : '" + functionName + "'");
		//alert("Use 'null' for a argument, if that argument is not required");
		return false;
	}
	else
	return true;
};

/**
truncates empty spaces on left and right side of a string
@function djs.trim
@param {string} txt The Text to be truncated
note: txt must always be of type {string}, and even if its not, txt is converted to {string} 
@returns txt truncated on left and right side
*/
djs.trim = function(txt){
	return new String(txt).replace(/^\s+|\s+$/g,"");
};

/**
truncates empty spaces on left side of a string
@function djs.ltrim
@param {string} txt The Text to be left truncated
note: txt must always be of type {string}, and even if its not, txt is converted to {string}
@returns left truncated txt
*/
djs.ltrim = function(txt){
	return new String(txt).replace(/^\s+/,"");
};

/**
truncates empty spaces on right side of a string
@function djs.rtrim
@param {string} txt The Text to be right truncated
note: txt must always be of type {string}, and even if its not, txt is converted to {string}
@returns right truncated txt
*/
djs.rtrim = function(txt){
	return new String(txt).replace(/\s+$/,"");
};

/**
verifies if the argument passed is null or undefined
@function djs.isValueNull
@param {value} val The 
@returns true if value is null or undefined
*/
djs.isValueNull = function(value){
	return ((value==undefined)||(value==null))? true:false;
	
};

/**
verifies if the argument passed is empty.
@function djs.isValueEmpty
@param {value} val The 
@returns true if value is empty
*/
djs.isValueEmpty = function(value){
	return ((value==undefined)||(value==null))? true:(djs.trim(value)=="")? true:false;
	
};

/**
inserts characters within a string in the specified location
@function djs.insertAfterChar
@param {string} txt the Text on which the insertion needs to be performed
@param {string} inserttxt the character/string that should be inserted
@param {string} insertAtChar the character/string after/before which the insertion is performed
@param optional {boolean} caseInSensitiveFlag when 'true', performs case Insensitive insertion; when 'false', performs case sensitive insertion. Default:false
@param optional {boolean} insertAfterFlag when 'true', performs insertion after 'insertAtChar'; when 'false', performs insertion before 'insertAtChar'. Default:true
@param optional {boolean} fromStarFlag when 'true' performs insertion, starting from the begininng of the string; when 'false', performs insertion, starting from the end of the string. Default:true
@param optional {boolean/Integer} insertMultipleFlag when 'true' performs insertion in the entire string; when false, performs insertion only once. If integer 'n' other than 0 or 1 is specified, then insertion takes 'n' number of times. Default:false
@returns the new txt value after insertion of inserttxt after/before insertAtChar
*/

    djs.insertAfterChar = function(txt, inserttxt, insertAtChar, caseInSensitiveFlag, insertAfterFlag, fromStarFlag, insertMultipleFlag){
	caseInSensitiveFlag = ((djs.isValueEmpty(caseInSensitiveFlag))? false:caseInSensitiveFlag);
	fromStarFlag = ((djs.isValueEmpty(fromStarFlag))? true:fromStarFlag);
	insertAfterFlag = ((djs.isValueEmpty(insertAfterFlag))? true:insertAfterFlag);
	insertMultipleFlag = ((djs.isValueEmpty(insertMultipleFlag))? false:insertMultipleFlag);
	var insertMultipleIndicator = (insertMultipleFlag!=false)? ((insertMultipleFlag!=true)? insertMultipleFlag:0):0;
	var txtlength = txt.length;
	var insertAtLoc = '';
	var tmp_array = '';
	var regEx= new RegExp(insertAtChar,"i");
	var count = 0;
	var indexLocation = 0;
	var matchFlag = false;
	if(fromStarFlag)
	{
		for(var i=0;i<txtlength;)
		{	
			matchFlag = ((caseInSensitiveFlag)?regEx.test(txt):txt.match(insertAtChar));
			if(matchFlag!=null && matchFlag!=false)
			{	
				if(caseInSensitiveFlag)
				{
					indexLocation = txt.toLowerCase().indexOf(insertAtChar.toLowerCase());
				}
				else
				{
					indexLocation = txt.indexOf(insertAtChar);
				}
				i += indexLocation;
				insertAtLoc=(insertAfterFlag)? (indexLocation+(insertAtChar.length)):(indexLocation);
				txt = txt.substring(0,insertAtLoc)+inserttxt+txt.substring((insertAtLoc),txt.length);
				count ++;
				if((!insertMultipleFlag) || ((insertMultipleIndicator>0) && (count>=insertMultipleIndicator)))
				{
					//alert("break");
					tmp_array += txt;
					break;
				}
				tmp_array += (insertAfterFlag)? txt.substr(0,((insertAtLoc)+(inserttxt.length))):txt.substr(0,((insertAtLoc+1)+(inserttxt.length)));
				txt = (insertAfterFlag)? txt.substring(((insertAtLoc)+(inserttxt.length))):txt.substring(((insertAtLoc+1)+(inserttxt.length)));
			}
			else
			{
				tmp_array += txt;
				i=txtlength;
			}
		}
	}
	else
	{
		for(var i=txtlength;i>=0;)
		{
			matchFlag = ((caseInSensitiveFlag)?regEx.test(txt):txt.match(insertAtChar));
			if(matchFlag!=null && matchFlag!=false)
			{	
				
				if(caseInSensitiveFlag)
				{
					lastIndexLocation = txt.toLowerCase().lastIndexOf(insertAtChar.toLowerCase());
				}
				else
				{
					lastIndexLocation = (txt.lastIndexOf(insertAtChar));
				}


				i += lastIndexLocation;
				insertAtLoc=(insertAfterFlag)? (lastIndexLocation+(insertAtChar.length)):(lastIndexLocation);
				txt = txt.substring(0,insertAtLoc)+inserttxt+txt.substring((insertAtLoc),txt.length);
				count ++;
				if((!insertMultipleFlag) || ((insertMultipleIndicator>0) && (count>=insertMultipleIndicator)))
				{
					//alert("break");
					tmp_array = txt + tmp_array;
					break;
				}
				tmp_array = (insertAfterFlag)? (txt.substr((insertAtLoc-1),txt.length) + tmp_array):(txt.substr((insertAtLoc),txt.length) + tmp_array);
				txt = (insertAfterFlag)?txt.substr(0,insertAtLoc-1):txt.substr(0,insertAtLoc);
			}
			else
			{
				tmp_array = txt + tmp_array;
				i=-1;
			}
		}
	}
	if(tmp_array != '')
	{
		txt = tmp_array;
	}
	return txt;	
};


djs.checklist_url = function()
{
	var db = json_db;
	var href = new String(window.location.href).split("/");
	href = href[href.length-1];
	var disp = '';
	for(var j in json_db.upi)
	{
		if(href==json_db.upi[j]["file_name"])
		{
			//alert(j+" : " + json_db[j]["file_name"])
			for(var i in json_db.upi[j])
			{
				disp += i + " : " + json_db.upi[j][i] + "\n";
			}
			break;
		}
	}
	return disp;
}

djs.checklist_upi = function()
{
	var disp = 'upi : '+_g_currentPage+'\n';
	for(j in json_db.upi[_g_currentPage])
	{
		disp+= j + " : " + json_db.upi[_g_currentPage][j] + "\n";
	}
	return disp;
}
