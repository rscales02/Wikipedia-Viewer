

$('#search-btn').on('click', function (event) {
	/* Act on the event */
	var searchTerm = $('#search-term').val();
	var url = 'https://en.wikipedia.org//w/api.php?action=opensearch&search=' + searchTerm + '&utf8=1';
	console.log(searchTerm);

	$.ajax({
		url: 'url',
		type: 'GET',
		dataType: 'json',
	})
	.done(function() {
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
});