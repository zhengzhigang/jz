function playVideo() {
  var $tVideoBox = $('#tVideoBox');
  $('.t-page3 .play_video').on('click', function () {
    $('.ns-title').html($(this).data('name'))

    $('.ns-video').attr('src', $(this).data('src'))
    $tVideoBox.show();
  });

  $tVideoBox.on('click', '.close', function () {
    $tVideoBox.hide();
    $tVideoBox.find('video')[0].pause();
  });
}

$(function () {
  $('#showDialog1').click(function() {
    $('#dialog1').show()
  })

  $('#showDialog2').click(function() {
    $('#dialog2').show()
  })

  $('#cloasDialog1').click(function() {
    $('#dialog1').hide()
  })

  $('#cloasDialog2').click(function() {
    $('#dialog2').hide()
  })

  playVideo()

  $('.play_page_video').click(function() {
    $('.page5_video').show().css({
      position: 'absolute',
      top: 0,
      left: 0
    })
  })
})
