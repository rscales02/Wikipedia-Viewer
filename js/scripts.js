$(document).ready(function () {
    $('#search-btn').on('click', function (event) {
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
            success: function (response) {
                data = response;
                console.log(data);
                dataHandler(data);
            }
        })
            .done(function () {
                console.log("success");
            })
            .fail(function () {
                console.log("error");
            })
            .always(function () {
                console.log("complete");
            });

    });

});

function dataHandler(data) {
    console.log('data handle')
    for (var i = 0; i < data[1].length; i++) {
        $('#output').append('<div class=\"container\"><a href=\"' + data[3][i] + '\">' + data[1][i] + '</a><p>' + data[2][i] + '</p></div>');
    }
}