$(function () {
  var page = {
    firstScreenHeight: null,
    headerHeight: 0,
    isClick: false,
    liveStartTime: '2021/4/23 14:00:00',
    init: function () {
      var winWidth = $(window).width()
      var _this = this
      this.initSwiper()
      // this.checkLiveTime()
      this.playVideo()
      if (winWidth > 768) {
        this.fixedNav()
        window.onscroll()
      }
      this.clickNav()

      $('.sec3__btn').on('click', function () {
        window.open('http://z-mz.cn/2THaQ')
      })
    },

    showQrCode: function () {
      $('.qr__code').show()
    },

    hideQrCode: function () {
      $('.qr__code').hide()
    },

    playVideo: function () {
      var $tVideoBox = $('#tVideoBox');
      $('.t-page3 .cont-item').on('click', function () {
        $('.ns-title').html($(this).data('name'))

        $('.ns-video').attr('src', $(this).data('src'))
        $tVideoBox.show();
      });

      $tVideoBox.on('click', '.close', function () {
        $tVideoBox.hide();
        $tVideoBox.find('video')[0].pause();
      });
    },

    fixedNav: function () {
      var _this = this
      // 导航吸顶
      window.onscroll = this.debounce(function () {
        var wScrollTop = $(window).scrollTop()
        if (_this.firstScreenHeight === null) {
          _this.headerHeight = $('.header').height() ? $('.header').height() : 0
          _this.firstScreenHeight = $('.t-page1').height()
        }
        var top = $(document).scrollTop()
        var speed = 300
        if (top >= _this.firstScreenHeight + _this.headerHeight) {
          $('.t-page-nav').addClass('on').stop().animate(500)
        } else {
          $('.t-page-nav').removeClass('on').stop().animate(speed)
        }

        // // 滚动定位
        $('.t-cont-item').each(function () {
          if (wScrollTop < $(this).offset().top && ($(this).offset().top - wScrollTop < 100)) {
            var i = $(this).data().index
            $('.nav-lists li').each(function () {
              if ($(this).data().index === i && !$(this).hasClass('active') && !_this.isClick) {
                $(this).addClass('active').siblings().removeClass('active')
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
    debounce: function (method, delay) {
      let timer = null
      return function () {
        let self = this

        let args = arguments
        timer && clearTimeout(timer)
        timer = setTimeout(function () {
          method.apply(self, args)
        }, delay)
      }
    },

    clickNav: function () {
      var _this = this
      $('.nav-lists li').on('click', function () {
        _this.isClick = true
        var i = $(this).data().index
        $(this).addClass('active').siblings().removeClass('active')
        console.log(i)
        $('.t-cont-item').each(function () {
          if ($(this).data().index === i) {
            $('html, body').animate({ scrollTop: $(this).offset().top - 20 + 'px' }, 500, 'swing', function () {
              _this.isClick = false
            })
          }
        })
      })
    },
    checkLiveTime () {
      let _this = this
      $('.qr__code').on('click', '.close', this.hideQrCode)
      // $('.sec3__btn').on('click', this.showQrCode)
      var showVideo = setInterval(function () {
        videoShow()
      }, 1000)
      function videoShow () {
        if (new Date().getTime() > new Date(_this.liveStartTime).getTime()) {
          // 已开始
          $('.sec3__btn').on('click', function () {
            _this.hideQrCode()
            window.open('http://z-mz.cn/2THaQ')
          })
          $('.t-page1 .btn').html('观看直播')
          clearInterval(showVideo)
        }
      }
    },
    initSwiper () {
      var clientWidth = document.body.clientWidth
      if (clientWidth > 780) {
        var mySwiper1 = new Swiper('.s-swiper01 .swiper-container', {
          watchSlidesProgress: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          loop: true,
          loopedSlides: 10,
          autoplay: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
          },
          on: {
            progress: function (progress) {
              for (i = 0; i < this.slides.length; i++) {
                var slide = this.slides.eq(i)
                var slideProgress = this.slides[i].progress
                modify = 1
                if (Math.abs(slideProgress) > 1) {
                  modify = (Math.abs(slideProgress) - 1) * 0.3 + 1
                }
                translate = slideProgress * modify * 70 + 'px'
                scale = 1 - Math.abs(slideProgress) / 5
                zIndex = 999 - Math.abs(Math.round(10 * slideProgress))
                slide.transform('translateX(' + translate + ') scale(' + scale + ')')
                slide.css('zIndex', zIndex)
                slide.css('opacity', 1)
                if (Math.abs(slideProgress) > 3) {
                  slide.css('opacity', 0)
                }
              }
            },
            setTransition: function (transition) {
              for (var i = 0; i < this.slides.length; i++) {
                var slide = this.slides.eq(i)
                slide.transition(transition)
              }
            }
          }
        })

        // var galleryThumbs = new Swiper('.gallery-thumbs', {
        //   spaceBetween: 10,
        //   slidesPerView: 7,
        //   loop: true,
        //   freeMode: true,
        //   autoplay: true,
        //   loopedSlides: 5, 
        //   watchSlidesVisibility: true,
        //   watchSlidesProgress: true
        // })
        // var galleryTop = new Swiper('.gallery-top', {
        //   spaceBetween: 10,
        //   loop: true,
        //   autoplay: true,
        //   loopedSlides: 6,
        //   navigation: {
        //     nextEl: '.swiper-next2',
        //     prevEl: '.swiper-prev2'
        //   },
        //   thumbs: {
        //     swiper: galleryThumbs
        //   }
        // })
      } else {
        var mySwiper1 = new Swiper('.s-swiper01 .swiper-container', {
          slidesPerView: 'auto',
          centeredSlides: true,
          loop: true,
          spaceBetween: 30,
          autoplay: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
          }
        })

        // var galleryTop = new Swiper('.gallery-top', {
        //   spaceBetween: 10,
        //   loop: true,
        //   autoplay: true,
        //   navigation: {
        //     nextEl: '.swiper-next1',
        //     prevEl: '.swiper-prev1'
        //   },
        //   pagination: {
        //     el: '.gallery-pagination1',
        //     type: 'fraction'
        //   }
        // })
      }
    }
  }
  page.init()
})