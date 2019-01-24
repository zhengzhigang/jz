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

    $('.sec8__content').on('click', '.sec8__circle', function() {
        $(this).addClass('active').siblings('.sec8__circle').removeClass('active');
    })
})