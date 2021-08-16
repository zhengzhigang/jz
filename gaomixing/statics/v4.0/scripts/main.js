$(function () {
  var swiper = new Swiper('.z-page3-swiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    // autoplay: true,
    loop: true,
	  centeredSlides: true
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
})
