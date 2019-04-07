$(function(){
    var page = {
        firstScreenHeight: null,
        isClick: false,
        init: function() {
            $('.sec3__btn').on('click', this.showQrCode);
            $('.qr__code').on('click', '.close', this.hideQrCode);
            this.fixedNav();
            this.clickNav();
            window.onscroll()
        },

        showQrCode: function() {
            $('.qr__code').show();
        },

        hideQrCode: function() {
            $('.qr__code').hide();
        },

        fixedNav: function() {
            var _this = this;
            // 导航吸顶
            window.onscroll = this.debounce(function() {
                var wScrollTop = $(window).scrollTop()
                if (_this.firstScreenHeight === null) {
                    _this.firstScreenHeight = $('.sec1').height();
                }
                var top = $(document).scrollTop();
                var speed = 300;
                if (top >= _this.firstScreenHeight) {
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
    page.init()
})
