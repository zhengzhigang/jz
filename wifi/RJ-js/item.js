$(function(){
    var header = {
        init: function() {
            // 初始化滚屏
            var swiper = new Swiper('.main__swiper', {
                paginationClickable: true,
                direction: 'vertical',
                mousewheelControl: true,
                speed: 800,
                onSlideChangeEnd: function(s) {
                    let i = s.activeIndex;
                    $('.header-list.t-pc .sub-item').each(function(item) {
                        var idx = $(this).data('index');
                        if (idx === i) {
                            $(this).addClass('active').parents('.header-item').addClass('active').siblings().removeClass('active').find('.sub-item').removeClass('active');
                        }
                    })
                    if (i === 5) {
                        var swiper = new Swiper('.slide6__swiper', {
                            pagination: '.swiper-pagination',
                            nextButton: '.swiper-button-next',
                            prevButton: '.swiper-button-prev',
                            spaceBetween: 30,
                            loop: true,
                            autoplay: 10000
                        });
                    }
                }
            });
            swiper.slideTo(9)

            $('.header-list.t-pc .header-item').hover(function() {
                $(this).addClass('active').find('.sub-nav').show();
            }, function() {
                $(this).removeClass('active').find('.sub-nav').hide();
            })

            $('.header-list.t-pc .sub-nav, .header-mobile-list .sub-list').on('click', '.sub-item', function() {
                var i = $(this).data('index');
                if ($(this).hasClass('active')) return;
                $(this).addClass('active').siblings().removeClass('active');
                $(this).parents('.header-item').siblings().find('.sub-item').removeClass('active');
                swiper.slideTo(i)
            })

            $('.header-button').on('click', function() {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                    $('.header-mobile-list').stop().animate({'height':0});
                    $('.header-mask').stop().fadeOut();
                } else {
                    $(this).addClass('active');
                    $('.header-mobile-list').stop().animate({'height':'100%'});
                    $('.header-mask').stop().fadeIn();
                }
            })

            $('.header-mask').on('click', function() {
                $('.header-mobile-list').stop().animate({'height':0});
                $('.header-mask').stop().fadeOut();
                $('.header-button').removeClass('active');
            })
        }
    }
    header.init()
})
