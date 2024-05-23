$(document).ready(function () {
    $('#movieForm').on('submit', function (e) {
        e.preventDefault();

        let title = $('#title').val();
        let rating = $('#rating').val();

        let newItem = $('<div class="newMovieItem">')
            .text(title + ": " + rating)
            .append($('<button class="remove">').text('Remove'))
        $('#movieList').append(newItem);

        $('#title').val('');
        $('#rating').val('');
    });

    $('#movieList').on('click', '.remove', function () {
        $(this).parent('.newMovieItem').remove();
    });
})