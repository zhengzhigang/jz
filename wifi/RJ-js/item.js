$(function(){
    var header = {
        mask: ['.mask1', '.mask2', '.mask3', '.mask4'],
        init: function() {
            var _this = this;
            var winWidth = $(window).width();

            if (winWidth > 768) {
                _this.fixedNav();
                _this.clickNav();
                window.onscroll();
            }

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

            $('.sec9').on('click', '.button', function() {
                var i = $(this).data('index');
                var el = _this.mask[i];
                $('.mask' + (i + 1)).addClass('open');
                document.body.style = 'overflow: hidden;'
            })

            $('.mask').on('click', '.close', function() {
                $(this).parents('.mask').removeClass('open');
                document.body.style = ''
            })
        },

        switchTab: function() {
            $('.sec10').on('click', '.left .item', function() {
                var i = $(this).data('index');
                $('.sec10 .img__list__box .list').eq(i - 1).addClass('active').siblings().removeClass('active');
                $('.sec10 .big__img img').eq(i - 1).addClass('active').siblings().removeClass('active');
                $(this).addClass('active').siblings().removeClass('active');
            })
        },

        fixedNav: function() {
            var _this = this;
            // 导航吸顶
            window.onscroll = this.debounce(function() {
                console.log('*****')
                var wScrollTop = $(window).scrollTop()
                if (_this.firstScreenHeight === null) {
                    _this.headerHeight = $('.header').height() ? $('.header').height() : 0;
                    _this.firstScreenHeight = $('.sec1').height();
                }
                var top = $(document).scrollTop();
                var speed = 300;
                if (top >= _this.firstScreenHeight + _this.headerHeight) {
                    $('.t-page-nav').addClass('on').stop().animate(500);
                } else {
                    $('.t-page-nav').removeClass('on').stop().animate(speed);
                }
                // 滚动定位
                $('.t-cont-item').each(function() {
                    if (wScrollTop < $(this).offset().top && ($(this).offset().top - wScrollTop < 100)) {
                        var i = $(this).data().index;
                        $('.t-nav-list li').each(function() {
                            if ($(this).data().index === i && !$(this).hasClass('active') && !_this.isClick) {
                                $(this).addClass('active').siblings().removeClass('active');
                            }
                        })
                    } else {
                    }
                })
            }, 5)
        },

        /**
         * 防抖函数
         * @param method 事件触发的操作
         * @param delay 多少毫秒内连续触发事件，不会执行
         * @returns {Function}
         */
        debounce: function(method, delay) {
            let timer = null;
            return function () {
                let self = this,
                    args = arguments;
                timer && clearTimeout(timer);
                timer = setTimeout(function () {
                    method.apply(self,args);
                },delay);
            }
        },

        clickNav: function() {
            var _this = this
            $('.t-nav-list li').on('click', function() {
                _this.isClick = true
                var i = $(this).data().index
                $(this).addClass('active').siblings().removeClass('active');
                $('.t-cont-item').each(function() {
                    if ($(this).data().index === i) {
                        $('html, body').animate({scrollTop: $(this).offset().top - 60 + 'px'}, 500, 'swing', function() {
                            _this.isClick = false                          
                        })
                    }
                })
            })
        }
    }
    header.init()
})
