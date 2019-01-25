$(function() {
    var option = {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        centeredSlides: true,
        // autoplay: 2500,
        loop: true,
        autoHeight: true,
        autoplayDisableOnInteraction: false
    }
    new Swiper('.sec4__swiper .swiper-container', option);
    new Swiper('.sec11__swiper .swiper-container', option);

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

    $('.sec11__swiper .slide3 tr').hover(function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    }, function(i) {
        var i = $(this).data('index')
        if (i !== 1 && i !== 7) {
            $(this).removeClass('active');
        }
    })
})