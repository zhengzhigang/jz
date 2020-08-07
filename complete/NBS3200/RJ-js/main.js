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
            console.log(mySwiper)
            $('.section-1 .thumb-item').on('click', function() {
                var i = $(this).index();
                mySwiper.slideToLoop(i)
            })
        },
        initTxtSwitch: function() {
            var btn = $('.product-open');
            var wrap = $('.product_open');
            var h = wrap.height()
            console.log(h)
            let warpH = 1 + 9 * 1.6
            if (h > 220) {
                btn.text('More+').css({display: 'block'})
                wrap.css({maxHeight: warpH + 'em'});
            } else {
                btn.css({display: 'none'});
            }
            console.log()
            btn.click(function() {
                if (!isOpen) {
                    btn.text('More-')
                    wrap.css({maxHeight: 'auto'});
                } else {
                    btn.text('More+')
                    wrap.css({maxHeight: warpH + 'em'});
                }
            })
        }
    }
    main.initMain();
});
