$.fn.dataStatistics = function (options) {
  options = $.extend({ min: 100, max: 150, time: 60000, len: 6 }, options || {})
  var ths = this
  var el = ths.find('.set_last')
  var html = '<div class="digit">' +
'  <div class="digit_top">' +
'    <span class="digit_wrap"></span>' +
'  </div>' +
'  <div class="shadow_top"></div>' +
'  <div class="digit_bottom">' +
'    <span class="digit_wrap"></span>' +
'  </div>' +
'  <div class="shadow_bottom"></div>' +
'</div>'
  var nowNums = zfill(options.min, options.len).toString().split('')
  function zfill (num, size) { var s = '000000000' + num; return s.substr(s.length - size) }
  ths.find('.digit_set').each(function () {
    for (i = 0; i <= 9; i++) {
      $(this).append(html)
      currentDigit = $(this).find('.digit')[i]
      $(currentDigit).find('.digit_wrap').append(i)
    }
  })
  $.each(nowNums, function (index, val) {
    var set = ths.find('.digit_set').eq(index); var i = parseInt(val)
    set.find('.digit').eq(i).addClass('active'); set.find('.digit').eq(i + 1).addClass('previous')
  })
  function run () {
    var difference = options.max - options.min; var t = options.time / difference
    function increase () {
      if (difference < 1) {
        clearInterval(timer1); return false
      }
      difference--
      var current = el.find('.active')
      var previous = el.find('.previous')
      previous.removeClass('previous')
      current.removeClass('active').addClass('previous')
      if (current.next().length == 0) {
        el.find('.digit:first-child').addClass('active')
        var prev = el.prev(); prevNumber(prev)
      } else {
        current.next().addClass('active')
      }
    }
    var timer1 = setInterval(increase, t)
  }
  function prevNumber (ths) {
    var current = ths.find('.active')
    var previous = ths.find('.previous')
    previous.removeClass('previous')
    current.removeClass('active').addClass('previous')
    if (current.next().length == 0) {
      ths.find('.digit:first-child').addClass('active')
      var prev = ths.prev(); if (prev.length > 0) { prevNumber(prev) }
    } else {
      current.next().addClass('active')
    }
  }
  run()
}
