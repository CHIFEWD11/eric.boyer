$(function() {

	var pages = ["page2.html", "page3.html", "page4.html"];

	pages.forEach(function(item, index, array) {
		console.log(item, index);

		$.ajax({
			url: item,
			type: 'GET',
			dataType: 'html',
			success: function(html) {
				console.log(html);
				// var div = $('#sourceDiv', $(html)).addClass('done');
				// $('#targetDiv').html(div);
	    }
		});
	});
});
