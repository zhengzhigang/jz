$(function() {
    var swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        loop: true,
        autoplayDisableOnInteraction: false
    });

    var width = $(window).width()
    $('.sec8__content').on('click', '.sec8__circle', function() {
        if (width > 768) {
            $(this).addClass('active').siblings('.sec8__circle').removeClass('active');
        }
        if (width <= 768) {
            $(this).addClass('active').siblings().addClass('active');
            $(this).parents('item').find('.sec8__circle').removeClass('active').siblings().removeClass('active');
        }
    })
})