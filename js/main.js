$(document).ready(function () {

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 150) {
            $('header').addClass('py-2');
        } else {
            $('header').removeClass('py-2');
        }
    });


    $('.navbar-nav a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 2000);
    });
    
    
    if($('.bxslider').length > 0){
        $('.lead-slider').bxSlider();
    };
    
    function animation(){
        var windowHeigh = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function(){
            var pozicija = $(this).offset().top;
            var animacija = $(this).attr('data-animation');
            
            if(pozicija < (scroll + windowHeigh - 100)){
                $(this).addClass(animacija);
            }else{
                $(this).removeClass(animacija);
            }
        });
    }
    
    animation();
    
    $(window).scroll(function(){
        animation();
    });
    
    
    
});