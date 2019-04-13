$(function(){
    var header = {
        mask: ['.mask1', '.mask2', '.mask3', '.mask4'],
        init: function() {
            var _this = this;

            // 第6屏swiper
            new Swiper('.sec6__swiper', {
                pagination: '.swiper-pagination',
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                spaceBetween: 20,
                loop: true,
                autoplay: {
                    delay: 10000,
                    disableOnInteraction: false,
                },
            });
            _this.switchTab();

            $('.sec10').on('click', '.button', function() {
                var i = $(this).data('index');
                var el = _this.mask[i];
                $(el).addClass('open');
            })

            $('.mask').on('click', '.close', function() {
                $(this).parents('.mask').removeClass('open');
            })
        },

        switchTab: function() {
            $('.sec10').on('click', '.left .item', function() {
                var i = $(this).data('index');
                $('.sec10 .img__list__box .list').eq(i - 1).addClass('active').siblings().removeClass('active');
                $('.sec10 .big__img img').eq(i - 1).addClass('active').siblings().removeClass('active');
                $(this).addClass('active').siblings().removeClass('active');
            })
        }
    }
    header.init()
})
