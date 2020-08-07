$(function() {
    var main = {
        isOpen: false,
        initMain: function() {
            this.initSwiper();
            this.initTxtSwitch()
        },
        initSwiper: function() {
            var mySwiper = new Swiper('.swiper-container',{
                loop: true,
                initialSlide: 0,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false
                },
                on: {
                    slideChangeTransitionStart:function() {
                        var i = this.realIndex;
                        $('.section-1 .thumb-item').eq(i).addClass('active').siblings().removeClass('active');
                    }
                }
            });
            $('.section-1 .thumb-item').on('click', function() {
                var i = $(this).index();
                mySwiper.slideToLoop(i)
            })
        },
        initTxtSwitch: function() {
            var _self = this;
            var btn = $('.product-open');
            var wrap = $('.product_open');
            var h = wrap.height()
            let warpH = 1 + 7 * 1.6
            if (h > 220) {
                btn.text('More+').css({display: 'block'})
                wrap.css({maxHeight: warpH + 'em'});
            } else {
                btn.css({display: 'none'});
            }
            btn.click(function() {
                if (!_self.isOpen) {
                    btn.text('More-')
                    wrap.css({maxHeight: 'auto'});
                    _self.isOpen = true
                } else {
                    btn.text('More+')
                    wrap.css({maxHeight: warpH + 'em'});
                    _self.isOpen = false
                }
            })
        }
    }
    main.initMain();
});
