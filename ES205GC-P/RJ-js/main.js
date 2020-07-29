$(function() {
    var main = {
        initMain: function() {
            this.initSwiper();
        },
        initSwiper: function() {
            var mySwiper = new Swiper('.swiper-container',{
                loop: true,
                on: {
                    slideChangeTransitionStart:function(e) {
                        var i = this.activeIndex;
                        $('.section-1 .thumb-item').eq(i).addClass('active').siblings().removeClass('active');
                    }
                }
                //其他设置
            });
            console.log(mySwiper)
            $('.section-1 .thumb-item').on('click', function() {
                var i = $(this).index();
                mySwiper.slideTo(i)
            })
        }
    }
    main.initMain();
});
