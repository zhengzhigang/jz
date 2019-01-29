$(function(){
    var header = {
        init: function() {
            var _this = this;
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
                    if (i === 8) {
                        new Swiper('.slide6__swiper', {
                            pagination: '.swiper-pagination',
                            nextButton: '.swiper-button-next',
                            prevButton: '.swiper-button-prev',
                            spaceBetween: 30,
                            loop: true,
                            autoplay: 10000
                        });
                    }
                    if (i === 9) {
                        $('.slide10 .img__list__box .list').eq(0).show();
                        $('.slide10 .big__img img').eq(0).show();
                        _this.switchTab();
                    }
                }
            });
            swiper.slideTo(9)

            $('.header-list.t-pc .header-item').hover(function() {
                $(this).find('.sub-nav').show();
            }, function() {
                $(this).find('.sub-nav').hide();
            })

            $('.header-list.t-pc .sub-nav, .header-mobile-list .sub-list').on('click', '.sub-item', function() {
                var i = $(this).data('index');
                if ($(this).hasClass('active')) return;
                $(this).addClass('active').siblings().removeClass('active');
                $(this).parents('.header-item').addClass('active').siblings().find('.sub-item').removeClass('active');
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
        },

        switchTab: function() {
            $('.slide10').on('click', '.left .item', function() {
                var i = $(this).data('index');
                $('.slide10 .img__list__box .list').eq(i - 1).show().siblings().hide();
                $('.slide10 .big__img img').eq(i - 1).show().siblings().hide();
                $(this).addClass('active').siblings().removeClass('active');
            })
        }
    }
    header.init()
})
