// JavaScript Document

var json_db_root = "KraveUpon";
var json_db_selfRoot = "self";
var json_db_parentAbout = "About";
var json_db_parentOne = "HTML";
var json_db_parentTwo = "CSS";
var json_db_parentThree = "JavaScript";
var json_db_parentFour = "Inspiration";
var json_db_null = null;
var json_db_true = true;
var json_db_false = false;
var json_db_css = "reset.css, layout.css, component.css, global.css, ie6.css, ie.css";
var json_db_script = "db.js, json.js, jquery-1.6.2.js, jquery-effects.js, djs.js, layout.js, common.js";
var json_db_NotApplicable = "NA";

json_db = {
	"categoryindex":["upi_002","upi_008","upi_009","upi_010"],
	"upi":{
		"upi_001":{
			"root":json_db_root,
			"parent":json_db_selfRoot,
			"title":"Home | KraveUpon",
			"description":"KraveUpon - Learner's Guide; The Web of HTML, CSS, JavaScript, Inspiration, Quotes, Images.",
			"keywords":"kraveupon, html, css, javascript, inspiration, quotes, images",
			"css":json_db_css,
			"css_page_specific":json_db_null,
			"script":json_db_script,
			"script_page_specific":json_db_null,
			"file_name":"index.html"
		},
		"upi_002":{
			"root":json_db_root,
			"parent":json_db_selfRoot,
			"title":"About | KraveUpon",
			"description":"KraveUpon - Get to know all about KraveUpon. Sitemap, Archives, Guidelines.",
			"keywords":"kraveupon, about, sitemap, archives, guidelines, wiki",
			"css":json_db_css,
			"css_page_specific":json_db_null,
			"script":json_db_script,
			"script_page_specific":json_db_null,
			"file_name":"_indexAbout.html"
		},
		"upi_003":{
			"root":json_db_root,
			"parent":json_db_parentAbout,
			"title":"SiteMap | About | KraveUpon",
			"description":"KraveUpon - Sitemap.",
			"keywords":"kraveupon, sitemap",
			"css":json_db_css,
			"css_page_specific":json_db_null,
			"script":json_db_script,
			"script_page_specific":json_db_null,
			"file_name":"sitemap.html"
		},
		"upi_004":{
			"root":json_db_root,
			"parent":json_db_parentAbout,
			"title":"Archives | About | KraveUpon",
			"description":"KraveUpon - Archives.",
			"keywords":"kraveupon, archives",
			"css":json_db_css,
			"css_page_specific":json_db_null,
			"script":json_db_script,
			"script_page_specific":json_db_null,
			"file_name":"archives.html"
		},
		"upi_005":{
			"root":json_db_root,
			"parent":json_db_parentAbout,
			"title":"Disclaimer | About | KraveUpon",
			"description":"KraveUpon - Disclaimer.",
			"keywords":"kraveupon, disclaimer",
			"css":json_db_css,
			"css_page_specific":json_db_null,
			"script":json_db_script,
			"script_page_specific":json_db_null,
			"file_name":"disclaimer.html"
		},
		"upi_006":{
			"root":json_db_root,
			"parent":json_db_parentAbout,
			"title":"GuideLines | About | KraveUpon",
			"description":"KraveUpon - GuideLines.",
			"keywords":"kraveupon, guidelines",
			"css":json_db_css,
			"css_page_specific":json_db_null,
			"script":json_db_script,
			"script_page_specific":json_db_null,
			"file_name":"guidelines.html"
		},
		"upi_007":{
			"root":json_db_root,
			"parent":json_db_parentAbout,
			"title":"Wiki | About | KraveUpon",
			"description":"KraveUpon - Wiki.",
			"keywords":"kraveupon, wiki",
			"css":json_db_css,
			"css_page_specific":json_db_null,
			"script":json_db_script,
			"script_page_specific":json_db_null,
			"file_name":"wiki.html"
		}
		,
		"upi_008":{
			"root":json_db_root,
			"parent":json_db_parentOne,
			"title":"HTMLIndex | KraveUpon",
			"description":"KraveUpon - HTML Tutorial",
			"keywords":"carvein, html, tutorial",
			"css":json_db_css,
			"css_page_specific":json_db_null,
			"script":json_db_script,
			"script_page_specific":json_db_null,
			"file_name":"_indexHTML.html"
		},
		"upi_009":{
			"root":json_db_root,
			"parent":json_db_selfRoot,
			"title":"CSSIndex | KraveUpon",
			"description":"KraveUpon - CSS Tutorial",
			"keywords":"carvein, css, tutorial",
			"css":json_db_css,
			"css_page_specific":json_db_null,
			"script":json_db_script,
			"script_page_specific":json_db_null,
			"file_name":"_indexCSS.html"
		},
		"upi_010":{
			"root":json_db_root,
			"parent":json_db_selfRoot,
			"title":"JavaScriptIndex | KraveUpon",
			"description":"KraveUpon - JavaScript Tutorial",
			"keywords":"kraveupon, javascript, tutorial",
			"css":json_db_css,
			"css_page_specific":json_db_null,
			"script":json_db_script,
			"script_page_specific":json_db_null,
			"file_name":"_indexJavaScript.html"
		},
		"upi_011":{
			"root":json_db_root,
			"parent":json_db_parentOne,
			"title":"HTML5 Tags | HTML | KraveUpon",
			"description":"HTML5 Tags.",
			"keywords":"kraveupon, html5, tags",
			"css":json_db_css,
			"css_page_specific":json_db_null,
			"script":json_db_script,
			"script_page_specific":json_db_null,
			"file_name":"html5-tags.html"
		},
		"upi_012":{
			"root":json_db_root,
			"parent":json_db_parentOne,
			"title":"HTML Tags | HTML | KraveUpon",
			"description":"HTML Tags.",
			"keywords":"kraveupon, html, tags",
			"css":json_db_css,
			"css_page_specific":json_db_null,
			"script":json_db_script,
			"script_page_specific":json_db_null,
			"file_name":"tag-anchor.html"
		},
		"upi_013":{
			"root":json_db_root,
			"parent":json_db_parentOne,
			"title":"HTML Anchor Tag : <a> | HTML | KraveUpon",
			"description":"HTML Anchor Tag : <a>.",
			"keywords":"kraveupon, html, a, anchor, tag",
			"css":json_db_css,
			"css_page_specific":json_db_true,
			"script":json_db_script,
			"script_page_specific":json_db_null,
			"file_name":"tag-anchor.html"
		},
		"upi_014":{
			"root":json_db_root,
			"parent":json_db_parentTwo,
			"title":"Clear Floating DIV | CSS | KraveUpon",
			"description":"Clear Floating DIV.",
			"keywords":"kraveupon, css, float, div, clear float",
			"css":json_db_css,
			"css_page_specific":json_db_true,
			"script":json_db_script,
			"script_page_specific":json_db_null,
			"file_name":"Clear-Floating-DIV.html"
		}
	}
}


/*var output = '';
for(var j in json_db.upi.upi_004)
output += j+": "+json_db.upi.upi_004[j] +"\n";
alert(output);*/