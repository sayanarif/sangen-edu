(function($) {
    "use strict";

    $(".goto-button a[href^='#']").click(function(e) {
        e.preventDefault();

        var position = $($(this).attr("href")).offset().top - 80;

        $("body, html").animate({
            scrollTop: position
        } /* speed */ );
    });
    /*========================================================*/
    /*=           SvgConvert          =*/
    /*========================================================*/

    $('img.svg').each(function() {
        var $img = $(this),
            imgID = $img.attr('id'),
            imgClass = $img.attr('class'),
            imgURL = $img.attr('src');

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = $(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass);
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);
        }, 'xml');
    });

    $(window).on('scroll', function() {

        if ($(this).scrollTop() > 600) {
            $('.backtotop').addClass("show")
        } else {
            $('.backtotop').removeClass("show")
        }

        /*  if ($(this).scrollTop() > 47) {
             $('.top-bar').addClass("fixed");
         } else {
             $('.top-bar').removeClass("fixed");
         }*/


        var nav_offset_top = $('header').height() + 250;
        /*-------------------------------------------------------------------------------
          Navbar 
         -------------------------------------------------------------------------------*/

        //* Navbar Fixed  
        function navbarFixed() {
            if ($('.header-area').length) {
                $(window).scroll(function() {
                    var scroll = $(window).scrollTop();
                    if (scroll >= nav_offset_top) {
                        $(".header-area").addClass("navbar_fixed");
                    } else {
                        $(".header-area").removeClass("navbar_fixed");
                    }
                });
            };
        };
        navbarFixed();

    });

    // Schedule tab details flip

    $(".single-overview-header").on("click", function() {
        $(this).parent().toggleClass('active');
        $(this).toggleClass('active');
    });

    $(".navigation ul li span").mouseup(function() {

        if ($(this).attr('aria-expanded') == 'undefined' || $(this).attr('aria-expanded') == 'true') {
            $(this).removeClass("fa-minus");
            $(this).addClass('fa-plus');

        } else {
            $(this).removeClass("fa-plus");
            $(this).addClass('fa-minus');
        }

    });

    $('.hamburger').on('click', function(e) {
        e.preventDefault();
        var mask = '<div class="mask-overlay"></div>';
        $(mask).hide().appendTo('body').fadeIn('fast');
        $('.dvLeft').addClass('open');
        $('.dvside-out,.mask-overlay').on('click', function() {
            $('.dvLeft').removeClass('open');
            $('.mask-overlay').remove()
        })
    });



    $('.trigger i').on('click', function(e) {
        e.preventDefault();

        $('.property-details-tab').toggleClass('open');
        $('.property-details-tab .nav-item').on('click', function() {
            $('.property-details-tab').removeClass('open');
        })
    });

    //back to top
    var backtotop = $(".backtotop");

    var windo = $(window),
        HtmlBody = $('html, body');

    backtotop.on('click', function() {
        HtmlBody.animate({
            scrollTop: 0
        }, 1500);
    });

    var nav_offset_top = $('.header').height() + 50;

    //* Navbar Fixed  
    function navbarFixed() {
        if ($('.header').length) {
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $(".header").addClass("navbar_fixed");
                } else {
                    $(".header").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();

    $(document).ready(function($) {

        /*===== Service Carousel ==========*/

        /* Main Slider  */
        $('.slider-start').owlCarousel({
            loop: true,
            nav: true,
            items: 1,
            autoplay: true,
            dots: false,
            smartSpeed: 600,
            autoplayTimeout: 12000,
            navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]

        });

        $(".slider-start").on('translate.owl.carousel', function() {
            $('.slider-text').removeClass('active');
        });

        $(".slider-start").on('translated.owl.carousel', function() {
            $('.slider-text').addClass('active');
        });

        $('.testimonial-start').owlCarousel({
            loop: true,
            nav: false,
            items: 1,
            autoplay: true,
            dots: true,
            smartSpeed: 600,
            navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]

        });

        $('.ticker-start').owlCarousel({
            //animateOut: 'fadeOut',
            loop: true,
            nav: false,
            items: 1,
            autoplay: true,
            dots: false,
            smartSpeed: 100,
            autoplaySpeed: 500,
            navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]

        });
        /*===== Portfolio Carousel ==========*/

        $('.tab-carousel').owlCarousel({
            loop: true,
            nav: false,
            items: 1,
            autoplay: false,
            dots: true,
            margin: 0,
            center: true,
            smartSpeed: 900,
            navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
            dotsContainer: '#carousel-custom-dots'

        });

        //============= Mobile Button  ============ 

        $(".accordion-wrapper .mobile-open").on('click', function() {
            $(".accordion").toggleClass("active");
        });

        $(".accordion .close").on('click', function() {
            $(this).parents('.accordion').removeClass("active");
        });

        var nav_scroll = function() {
            setTimeout(function() {
                let divHeight = $('#menubar').height();
                let menuHeight = $('#ulmenu').height();
                if (menuHeight > divHeight) {
                    $('#menubar').css('overflow-y', 'scroll')
                } else {
                    $('#menubar').css('overflow-y', 'hidden')
                }
            }, 500)
        };
        nav_scroll();
        $(window).on('resize', function() {
            nav_scroll()
        });
        $(function() {});
        $(".navigation ul li span.sub").click(function() {
            nav_scroll();
            var box_id = $(this).data('target_');
            if ($(box_id).is(":visible")) {
                $(box_id).removeClass('show');
                $(this).removeClass("fa-minus");
                $(this).addClass('fa-plus')
            } else if (!$(box_id).is(":visible")) {
                $(box_id).addClass('show');
                $(this).removeClass("fa-plus");
                $(this).addClass('fa-minus')
            }
        })
    });

})(jQuery);
$(document).ready(function() {

    $(".filter-button").click(function() {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            //$('.filter').removeClass('hidden');
            $('.filter-media').show('1000');
        } else {
            // $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //  $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $('.filter-media').not('.' + value).hide('3000');
            $('.filter-media').filter('.' + value).show('3000');

        }
    });

    if ($('.filter-button').removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

});