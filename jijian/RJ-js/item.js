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

  $('#closeDialog1').click(function() {
    $('#dialog1').hide()
  })

  $('#closeDialog2').click(function() {
    $('#dialog2').hide()
  })



  $('.showPage4Dialog1').click(function() {
    $('#page4Dialog1').show()
  })

  $('#closePage4Dialog1').click(function() {
    $('#page4Dialog1').hide()
  })

  $('.showPage4Dialog2').click(function() {
    $('#page4Dialog2').show()
  })

  $('#closePage4Dialog2').click(function() {
    $('#page4Dialog2').hide()
  })

  $('.showPage4Dialog3').click(function() {
    $('#page4Dialog3').show()
  })

  $('#closePage4Dialog3').click(function() {
    $('#page4Dialog3').hide()
  })

  $('.showPage4Dialog4').click(function() {
    $('#page4Dialog4').show()
  })

  $('#closePage4Dialog4').click(function() {
    $('#page4Dialog4').hide()
  })

  $('.showPage4Dialog5').click(function() {
    $('#page4Dialog5').show()
  })

  $('#closePage4Dialog5').click(function() {
    $('#page4Dialog5').hide()
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
