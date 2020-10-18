$(function() {
    var main = {
        isOpen: false,
        initMain: function() {
            this.initSwiper();
            this.initOnNav();
        },
        initSwiper: function() {
            var mySwiper = new Swiper('.swiper-container',{
                loop: true,
                initialSlide: 0,
                spaceBetween: 30,
                speed: 1000,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        },
        initOnNav: function() {
            new Scrollspy({
                scrollElement: window,
                offset: 200,
                selector: '.zg-nav-text',
                activeCls: 'active',
                reach0: true,
                reachActive: function(el) {
                    console.log(111)
                }
            });

            $('.zg-nav-text').on('click', function() {
                var currScroll = $(window).scrollTop();
                var t = $(this).data().traget;
                var targetScroll = currScroll + $(t).offset().top
                console.log('&&&&&', targetScroll)
                $('html').animate({scrollTop: targetScroll - 80 + 'px'}, 100);
            })
        }
    }
    main.initMain();
});
