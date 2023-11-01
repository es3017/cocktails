$(document).ready(function () {
    $('.cocktail-card').on('mouseenter', function () {
        $(this).find('.recipe').show();
        $(this).find('.calories').hide();
    });

    $('.cocktail-card').on('click', function () {
        $(this).find('.calories').show();
    });

    $('.cocktail-card').on('mouseleave', function () {
        $(this).find('.recipe, .calories').hide();
    });
});
