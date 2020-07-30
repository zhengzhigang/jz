$(function() {
    var main = {
        initMain: function() {
            this.initSwiper();
        },
        initSwiper: function() {
            console.log('&&&&')
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
                //其他设置
            });
            console.log(mySwiper)
            $('.section-1 .thumb-item').on('click', function() {
                var i = $(this).index();
                mySwiper.slideToLoop(i)
            })
        }
    }
    main.initMain();
});
