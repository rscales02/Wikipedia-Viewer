$(document).ready(function() {
	var data = "";

    $('#search-btn').on('click', function(event) {
        /* Act on the event */
        var searchTerm = $('#search-term').val();
        var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm;

        $.ajax({
                type: 'GET',
                url: url,
                dataType: 'json',
                data: {
                	format: 'json',
                	origin: '*'
                },
                success: function(response) {
                	data = response;
                	
                }
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
    console.log(data);
});