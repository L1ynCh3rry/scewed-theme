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


    if ($('.bxslider').length > 0) {
        $('.lead-slider').bxSlider();
        $('.testimonial-slider').bxSlider();
    }
    ;

    function animation() {
        var windowHeigh = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            var pozicija = $(this).offset().top;
            var animacija = $(this).attr('data-animation');

            if (pozicija < (scroll + windowHeigh - 100)) {
                $(this).addClass(animacija);
            } else {
                $(this).removeClass(animacija);
            }
        });
    }

    animation();

    $(window).scroll(function () {
        animation();
    });

    if ($('.owl-carousel').length > 0) {
        $('.team-slider').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        });

        $('.portfolio-slider').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        });
    }

    $(window).scroll(function () {
        var wh = $(window).height();
        var scroll = $(window).scrollTop();
        $('.count').each(function () {
            var position = $(this).offset().top;
            if(position < wh + scroll - 100){
                $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
            }
            
            
        });
    });




});