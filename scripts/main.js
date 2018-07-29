function resizedesk() {
    var window_height = $(window).height();
    var window_width = $(window).width();
    window_height = 16 * window_height / 9
    var max_width = Math.min( window_height, window_width);

    $('.stretchy-wrapper').css('width', max_width);
    $('.stretchy-wrapper').css('padding-bottom',  9 * max_width / 16);
} 

window.onresize = resizedesk

$(document).ready(function(){
    $('a[href^="#"]').on('click', function(event) {

        var target = $(this.getAttribute('href'));

        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }

    });
});