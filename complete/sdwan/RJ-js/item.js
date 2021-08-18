$(function () {
  var page = {
    firstScreenHeight: null,
    headerHeight: 0,
    isClick: false,
    liveStartTime: '2021/5/21 16:30:00',
    init: function () {
      var winWidth = $(window).width()
      this.initSwiper()
      if (winWidth > 768) {
        this.fixedNav()
        window.onscroll()
      }
      this.clickNav()
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
    initSwiper () {
      var mySwiper1 = new Swiper('.s-swiper01 .swiper-container', {
        watchSlidesProgress: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        spaceBetween: 30,
        autoplay: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        on: {
          slideChangeTransitionStart: function (s) {
            var index = this.realIndex
            $('.slide_list li').eq(index).addClass('active').siblings().removeClass('active')
          }
        }
      })

      $('.slide_list li').on('click', function() {
        mySwiper1.slideTo($(this).index())
      })
    }
  }
  page.init()
})
