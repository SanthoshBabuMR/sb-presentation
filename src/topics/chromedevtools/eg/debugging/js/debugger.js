(function(){
	var url = "../db/test.json";
	var ele_header = '#title';
	var ele_content = '#content';
	var ele_backlink = '.backlink'
	$.ajax({
		  url: url,
		  dataType: 'json',
		  success: function(text, textStatus, errorThrown){
			debugger;
			console.log("ajax success");
			$(ele_header).html(text.title)
			$(ele_content).html(text.content)
			$(ele_backlink).text(text.examplelink[1])
			$(ele_backlink).attr('href',text.examplelink[0])
			
		  },
		  error: function(data, textStatus, errorThrown) {
			console.log("# ajax error");
		  },
		  complete: function(data, textStatus) { //for additional info
			console.log("ajax complete");
		  }
		});

})();