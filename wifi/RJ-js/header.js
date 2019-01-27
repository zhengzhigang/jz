$(function(){
    var header = {
        init: function() {
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
