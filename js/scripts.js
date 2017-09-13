$('#submit').on('click', function(event) {
	/* Act on the event */
	event.preventDefault();
	var searchTerm = $('#searchTerm').val();
	console.log(searchTerm);
});