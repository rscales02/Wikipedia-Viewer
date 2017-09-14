$(document).ready(function() {
    $('#search-btn').on('click', function(event) {
        /* Act on the event */
        var searchTerm = $('#search-term').val();
        var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm;
        var data = "";

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
    	
    	function dataHandler () {
    		console.log(data);
    		for (var i = 0; i < data[0].length; i++) {
    			$('#output').html('<div class=\"container\"><a href=\"' + data[2][i]+ '\">' + data[0][i] '</a><p>' + data[1][i] + '</p></div>');
    		}
    	}
    });

});