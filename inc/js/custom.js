var owl = $('.my-carousel');
owl.owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 600,
    dots: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        960: {
            items: 3
        },
        1200: {
            items: 3
        }
    }
});
owl.on('mousewheel', '.owl-stage', function(e) {
    if (e.deltaY > 0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});


var owl = $('.owl-news');
owl.owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 600,
    dots: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        960: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
});
owl.on('mousewheel', '.owl-stage', function(e) {
    if (e.deltaY > 0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});

var owl = $('.owl-events');
owl.owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 600,
    dots: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        960: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
});
owl.on('mousewheel', '.owl-stage', function(e) {
    if (e.deltaY > 0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});