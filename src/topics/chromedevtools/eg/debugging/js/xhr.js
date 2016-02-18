(function() {
	var ls = window.localStorage;
	var pageMem = '';
	var stateOptionList = '';
	var districtList = '';
	var fetchMax = 3;
	var fetchCount = 0;
	var ele_form = 'districtfinder';
	var ele_clear = 'clear';
	var ele_state = 'state';
	var ele_districts = 'districts';
	
	var hasLocalStorage = function() {
		if (window.localStorage) {
			try {
				window.localStorage.setItem('testkey', 'testvalue');
				window.localStorage.removeItem('testkey');
				return true;
			} catch (e) {}
		}
		return false;
	}
	
	var ajaxCall = function(success){
		var url = "../db/loc.json";
		$.getJSON(url,function(d){
		  pageMem = (hasLocalStorage)? (ls.locationData = JSON.stringify(d)): JSON.stringify(d);//"{\"districts\":{\"a\":{}}}"
		  if(typeof success == "function") {
			console.log('# ajaxCall success callback');
			success()
		  }
		}).fail(function(){
			console.warn('# ajaxCall failure callback');
			success()
		});
		
	};
	
	var getLocationCall = function(success) {
		console.log('# ajax call to fetch location');
		if(++fetchCount <= fetchMax) {
			ajaxCall(success);
		}
		else {
			fetchCount = 0;
			error();
		}
	}
	
	var locationLoadedSuccess = function(callback) {
		console.log('# load location');
		if(!((hasLocalStorage && ls.locationData)) || !pageMem) {
			getLocationCall(function(){locationLoadedSuccess(callback)})
			return;
		}
		if(typeof callback == "function") {
			$('.'+ele_clear).empty().toggleClass('success')
			fetchCount = 0;
			if(hasLocalStorage && ls.locationData) {
				callback(JSON.parse(ls.locationData));
			}
			else if(pageMem) {
				callback(JSON.parse(pageMem));
			}
		}
	}
	
	var error = function() {
		console.log('# error');
		$('#'+ele_form).hide();
		$('.'+ele_clear).empty().toggleClass('success').append('<p>Please try after some time.</p>');
	}
	
	var populateState = function(stateOptionList) {
		console.log('# populating state');
		var options = ["<option val='Choose'>...</option>"];
		if(stateOptionList != "" ) {
			$.each(stateOptionList.districts,function(state,val){
				options.push("<option val='"+state+"'>"+state+"</option>");
			})
		}
		$('#'+ele_form).show().find('#'+ele_state).append(options.join(""));
	}
	
	var populateDistrict = function(districtList) {
		console.log('# populating district');
		var list = [];
		var hasVal = false;
		if(districtList != "" ) {
			list.push("<p><strong>"+$('#'+ele_state).val()+"</strong> district(s)</p>")
			list.push("<ul>");
			$.each(districtList.districts,function(state,val){
				if(state == $('#'+ele_state).val()) {
					$.each(districtList.districts[state],function(district,val){
						hasVal = true;
						list.push("<li>"+district+"</li>");
					});
				}
			});
			list.push("</ul>");
			if(hasVal) {
				$('#'+ele_districts).show().append(list.join(""));
			}
			else {
				$('#'+ele_districts).show().append("<p>No Districts available for: <strong>"+$('#'+ele_state).val()+"</strong></p>");
			}
		}
		
	}
	
	// init begins here
	locationLoadedSuccess(populateState);
	$( "#districtfinder").on("change","#state",function(){locationLoadedSuccess(populateDistrict)});
	$('.clearLocalStorage').on("click",function(){
		if(hasLocalStorage && ls.locationData) {
			ls.removeItem('locationData');
			console.log('location data removed from local cache');
		}
	})
	
})()