$(document).ready(function() {
    $("#slideToggle").pageslide({ direction: "right", modal: true });
    $('body').click(function() {
        $.pageslide.close();
    });

    //add support for swipes on the carousel. Found at: http://lazcreative.com/blog/how-to/how-to-adding-swipe-support-to-bootstraps-carousel/
    $("#myCarousel").swiperight(function() {
        $(this).find('.carousel-control.left').trigger('click');
    });
    $("#myCarousel").swipeleft(function() {
        $(this).find('.carousel-control.right').trigger('click');
    });
});