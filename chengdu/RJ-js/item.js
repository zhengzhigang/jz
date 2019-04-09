/*
 * file-name：item.js
 * author：ZhengZhiGang
 * 描述：页面js
 * date：2019-04-07
 */
$(function(){
    var page = {
        firstScreenHeight: null,
        headerHeight: 0,
        isClick: false,
        init: function() {
            var winWidth = $(window).width();
            var _this = this;
            $('.sec3__btn').on('click', this.showQrCode);
            $('.qr__code').on('click', '.close', this.hideQrCode);
            this.checkLiveTime(function() {
                $('.sec3__btn').remove();
                $('.sec3__video').on('click', _this.loadLive);
            });
            if (winWidth > 768) {
                this.fixedNav();
                this.clickNav();
                window.onscroll();
            }
        },

        showQrCode: function() {
            $('.qr__code').show();
        },

        hideQrCode: function() {
            $('.qr__code').hide();
        },

        /**
         * 直播时间检查
         * @param {Function} callback 回调函数
         * @return {}
         */
        checkLiveTime: function(callback) {
            var _this = this;
            var now = (new Date()).getTime();
            var start1 = (new Date('2019-04-16 09:00:00')).getTime();
            var start2 = (new Date('2019-04-16 13:30:00')).getTime();
            var end1 = (new Date('2019-04-16 11:41:00')).getTime();

            if ((now >= start1 && now < end1) || now >= start2) {
                callback();
            }
        },

        loadLive: function (userData) {
            $('.s-video').unbind('click');
            var iframe = $('<iframe id="iframe" scrolling="no" style="width: 100%; height: 600px;" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"/>');
            iframe.attr('src', 'http://live.vhall.com/webinar/inituser/934514375?k=' + new Date().getTime());
            $('.sec3__video').empty();
            $('.sec3__video').append(iframe);
        },

        fixedNav: function() {
            var _this = this;
            // 导航吸顶
            window.onscroll = this.debounce(function() {
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
    page.init()
})
