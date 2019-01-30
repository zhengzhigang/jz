$(function(){
    var header = {
        mask: ['.mask1', '.mask2', '.mask3', '.mask4'],
        init: function() {
            var _this = this;
            var win_width = $(window).width();
            var option = {
                direction: 'vertical',
                mousewheelControl: true,
                speed: 800
            }
            // 初始化滚屏
            if (win_width <= 768) {
                option = {
                    direction: 'vertical',
                    slidesPerView: 'auto',
                    freeMode: true,
                    mousewheel: true
                }
            }
            var swiper = new Swiper('.main__swiper', option);

            // 第6屏swiper
            new Swiper('.slide6__swiper', {
                pagination: '.swiper-pagination',
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                spaceBetween: 20,
                loop: true,
                // autoplay: 1000
            });

            $('.slide10 .img__list__box .list').eq(0).show();
            $('.slide10 .big__img img').eq(0).show();
            _this.switchTab();

            $('.header-list.t-pc .header-item').hover(function() {
                $(this).find('.sub-nav').show();
            }, function() {
                $(this).find('.sub-nav').hide();
            })

            $('.header-list.t-pc .sub-nav, .header-mobile-list .sub-list').on('click', '.sub-item', function() {
                var i = $(this).data('index');
                if ($(this).hasClass('active')) return;
                $(this).addClass('active').siblings().removeClass('active');
                if (win_width <= 768) {
                    $(this).parents('.mobile-list-item').addClass('active').siblings().removeClass('active').find('.sub-item').removeClass('active');
                } else {
                    $(this).parents('.header-item').addClass('active').siblings().removeClass('active').find('.sub-item').removeClass('active');
                }
                swiper.slideTo(i + 1)
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

            $('.slide9').on('click', '.button', function() {
                var i = $(this).data('index');
                var el = _this.mask[i];
                $(el).addClass('open');
            })

            $('.mask').on('click', '.close', function() {
                $(this).parents('.mask').removeClass('open');
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
