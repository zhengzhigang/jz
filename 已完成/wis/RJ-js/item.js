$(function() {
    var option = {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        centeredSlides: true,
        autoplay: 10000,
        loop: true,
        autoplayDisableOnInteraction: false
    }
    new Swiper('.sec4__swiper .swiper-container', option);
    // new Swiper('.sec11__swiper .swiper-container', option);
    $('.sec11__swiper .slide3 tr').hover(function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    }, function(i) {
        var i = $(this).data('index')
        if (i !== 1 && i !== 7) {
            $(this).removeClass('active');
        }
    })

    $('.tab__link').on('click', function() {
        var index = $(this).data('index');
        $(".product-details-nav-wrap li").each(function(i) {
            if (i === index) {
                $(this).addClass('on').siblings().removeClass('on')
            }
        })
        $('.product-details-content').removeClass('detail-active').eq(index).addClass('detail-active')
    })
})