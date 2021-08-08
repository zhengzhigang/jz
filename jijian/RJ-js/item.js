$(function () {
  var width = document.body.clientWidth
  var swiper = new Swiper('.page5-swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    centeredSlides: true,
    autoplay: true,
    pagination: {
      el: '.swiper-pagination'
    },
    autoHeight: true
  })
})
