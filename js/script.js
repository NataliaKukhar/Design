$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        speed: 500,
        easing: 'linear',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]

    });
});
$(function () {
    $('#scroll_bottom').click(function () {
        $('html, body').animate({ scrollTop: 800 }, 300);
        return false;
    });
});