function resizedesk() {
    var window_height = $(window).height();
    var window_width = $(window).width();
    window_height = 16 * window_height / 9
    var max_width = Math.min( window_height, window_width);

    $('.stretchy-wrapper').css('width', max_width);
    $('.stretchy-wrapper').css('padding-bottom',  9 * max_width / 16);
} 



window.onresize = resizedesk

window.addEventListener("load", function(){
    $("#load_screen").animate({'opacity':'0'},{
    duration: 1000,
    complete: function () {
        $("#load_screen").remove()
    }
    });
});

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
    
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.container_timeline').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1000);
                    
            }
            
        }); 
    
    });
    });