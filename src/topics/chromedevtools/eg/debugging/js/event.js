(function(){
	
	var ele_save = "#save";
	var ele_back = "#back";
	var ele_form = "#details";
	var ele_error = "#error";
	var ele_resultContainer = "#result";
	var ele_data = "#data";
	
	var save = function() {
		console.log('# save');
		$(ele_form).hide();	
		$(ele_data).empty().append("<strong>"+$('#f-name').val() + "</strong> resides at <strong>" + $('#f-residence').val()+ "</strong>");
		$(ele_resultContainer).show();
	}
	
	var back = function() {
		console.log('# back');
		clearForm();
		$(ele_resultContainer).hide();
		$(ele_form).show();	
	}
	
	var validate = function() {
		console.log('# validate');
		if($('#f-name').val().length == 0 && $('#f-residence').val().length == 0){
			$(ele_error).empty().append('<span style="color: red;">Please fill in the missing input</span>').show();
			return false;
		}
		$(ele_error).hide().empty();
		return true;		
	}
	var clearForm = function() {
		$('#f-name, #f-residence').val("");
	}
	
	// init begins
	$(ele_save).on("click keypress",function(e){
		e.preventDefault();
		if ((e.type == "keypress" && e.keyCode == 13) || e.type == "click") {
			if(validate()){
				save();
			}
		}		
	});	
	$(ele_back).on("click keypress",function(e){
		e.preventDefault();
		if ((e.type == "keypress" && e.keyCode == 13) || e.type == "click") {
			back();
		}		
	});	
	$(ele_form).on("keypress", function(e){
		if ((e.type == "keypress" && e.keyCode == 13)) {
			$('#save').trigger('click');
		}	
	});
})()