$(document).ready(function(){
	console.log("document ready fired");
	$('img').bind('load',function(e){
		console.log("Img '"+ $(e.target).attr('src') + "' loaded");
	});
});
console.log("init loaded");