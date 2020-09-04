(function ($, window, document) {
  $(window).load(function () {
    if ($(window).innerWidth() < 768) {
      $('.ry-footer-item h4').on('click', function () {
        $(this).toggleClass('on').next('ul').slideToggle()
      })
    }
  })
})(jQuery, window, document)
