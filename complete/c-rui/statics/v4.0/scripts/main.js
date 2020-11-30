$(function () {
  var swiper = new Swiper('.banner-swiper', {
    autoplay: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
  var width = document.body.clientWidth
  var swiper1 = new Swiper('.page3-swiper', {
    autoplay: !(width > 768),
    slidesPerView: width > 768 ? 5 : 1.3,
    centeredSlides: !(width > 768),
    spaceBetween: 10
  })

  if (width > 768) {
    var galleryThumbs = new Swiper('.swiper-list', {
      autoplay: true,
      direction: 'vertical',
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true
    })
    var galleryTop = new Swiper('.swiper-item', {
      autoplay: true,
      loop: true,
      thumbs: {
        swiper: galleryThumbs
      }
    })
  }

  $('.page2-cont.ry-mobile-show .cont-item').eq(0).addClass('on').find('.item-info').css('display', 'block')
  $('.page2-cont.ry-mobile-show .cont-item .item-tit').on('click', function () {
    $(this).parents('.cont-item').siblings('.cont-item').find('.item-info').slideUp()
    $(this).parents('.cont-item').toggleClass('on').siblings('.cont-item').removeClass('on')
    $(this).next('.item-info').slideToggle()
  })
})
