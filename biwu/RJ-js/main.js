$(function() {
    var main = {
        isOpen: false,
        initMain: function() {
            this.initSwiper();
            this.initOnNav();
        },
        initSwiper: function() {
            var options = {
                direction: 'vertical',
                slidesPerView: 'auto',
                freeMode: true,
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
                mousewheel: true,
            }
            new Swiper('#sceneSlide',{
                loop: true,
                initialSlide: 0,
                spaceBetween: 30,
                speed: 600,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
            peopleScrollContent

            var swiper1 = new Swiper('#scrollContent', options)
            this.canScroll(swiper1)

            var swiper2 = new Swiper('#peopleScrollContent', options);
            this.canScroll(swiper2)

            var swiper3 = new Swiper('#rankScrollContent', options);
            this.canScroll(swiper3)
        },
        canScroll: function(swiper) {
            var startScroll, touchStart, touchCurrent;
            swiper.slides.on('touchstart', function (e) {
                startScroll = this.scrollTop;
                touchStart = e.targetTouches[0].pageY;
            }, true);
            swiper.slides.on('touchmove', function (e) {
                touchCurrent = e.targetTouches[0].pageY;
                var touchesDiff = touchCurrent - touchStart;
                var onlyScrolling = (touchesDiff < 0 && swiper.isEnd) || (touchesDiff > 0 && swiper.isBeginning)
                if (onlyScrolling) {
                    e.stopPropagation();
                }
            }, true);
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
