$(function () {
  $('.tab-list .tab-cont').eq(0).addClass('cur')
  $('.tab-title li').on('click', function () {
    $(this).addClass('cur').siblings('li').removeClass('cur')
    $('.tab-list .tab-cont').removeClass('cur').eq($(this).index()).addClass('cur')
  })
  $('.dataStatistics').dataStatistics({ min: 0, max: 50, time: 5000, len: 5 })

  var swiperLength = $('.tab-list .tab-cont').length
  for (var i = 0; i < swiperLength; i++) {
    new Swiper('.swiper-cont' + (i + 1), {
      autoplay: true,
      direction: 'vertical',
      slidesPerView: 'auto',
      spaceBetween: 15, // slide的间距px
      speed: 400, // 速度
      loop: true // 循环
    })
  }
})
