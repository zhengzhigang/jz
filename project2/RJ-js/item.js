$(function () {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  // var swiper_page1_9 = new Swiper('.swiper-container', {
  //   autoplay: {
  //     delay: 10000,
  //     stopOnLastSlide: false,
  //     disableOnInteraction: true
  //   },
  //   slidesPerView: width < 768 ? 1 : 3,
  //   loopFillGroupWithBlank: true,
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev'
  //   }
  // })
  // $('.t-page1-bg-3 .page1-bg3-link1').click(function () {
  //   document.getElementById('t-page1-4').scrollIntoView()
  // })
  // $('.t-page1-bg-3 .page1-bg3-link2').click(function () {
  //   document.getElementById('t-page1-5').scrollIntoView()
  // })
  // $('.t-page1-bg-3 .page1-bg3-link3').click(function () {
  //   document.getElementById('t-page1-6').scrollIntoView()
  // })
  // $('.t-page1-bg-3 .page1-bg3-link4').click(function () {
  //   document.getElementById('t-page1-7').scrollIntoView()
  // })
})
