$(function () {
  var width = $(window).width();
  var options = {
    slidesPerView: width <= 768 ? 1 : 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  }
  new Swiper('.sec2__swiper .swiper-container', options);
  new Swiper('.sec6__swiper .swiper-container', options);
})
