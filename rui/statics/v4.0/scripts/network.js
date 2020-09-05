$(function () {
  // 睿网络介绍
  $('#ry-network-tab li a').on('click', function () {
    // $(this).addClass('ry-this').parent('li').siblings('li').find('a').removeClass('ry-this')
    $(this).parent('li').addClass('ry-this').siblings('li').removeClass('ry-this')
    $('#ry-network-tab-wrap').addClass('ry-tab-fixed')
    $('.tab-placeholder').show()
    var h = $('#ry-network-tab-wrap').height()
    var _h = $('#ry-header-wrap').height()
    var id = $(this).attr('href')
    var H = $(id).offset().top
    $('html,body').animate({
      'scrollTop': H - h - _h
    })
  })

  var tabOffsetTop = $('#ry-network-tab-wrap').offset().top
  var _h = $('#ry-network-tab-wrap').height() + 110
  var rPro_top = $('#ryPro').offset().top - _h
  var rService_top = $('#ryService').offset().top - _h
  var rScene_top = $('#ryScene').offset().top - _h
  var rCase_top = $('#ryCase').offset().top - _h
  var rZxun_top = $('#ryZxun').offset().top - _h

  $(window).scroll(function () {
    var _h = $(this).scrollTop()
    var _top = $('#ry-header-wrap').height() + $('#ry-network-tab-wrap').height()
    if (_h > tabOffsetTop - $('#ry-header-wrap').height()) {
      $('#ry-network-tab-wrap').addClass('ry-tab-fixed')
      $('.tab-placeholder').show()
    } else {
      $('#ry-network-tab-wrap').removeClass('ry-tab-fixed')
      $('.tab-placeholder').hide()
    }
    if (_h > rZxun_top - _top) {
      set_this('ryZxun')
    } else if (_h > rCase_top - _top) {
      set_this('ryCase')
    } else if (_h > rScene_top - _top) {
      set_this('ryScene')
    } else if (_h > rService_top - _top) {
      set_this('ryService')
    } else if (_h > rPro_top - _top) {
      set_this('ryPro')
    }
  })

  function set_this (dataId) {
    $('#ry-network-tab li a').parent('li').removeClass('ry-this')
    $("#ry-network-tab li a[data-id='" + dataId + "']").parent('li').addClass('ry-this')
  }

  // 展开视频弹窗
  $('.ry-rService-video').on('click', function () {
    $('#ry-video-popup,#ry-popup-mask').show()

    // 追加视频代码
    var videoSrc = $(this).attr('data-src')
    var videoTitle = $(this).attr('data-title') ? $(this).attr('data-title') : ''
    var posterImg = $(this).attr('data-poster') ? $(this).attr('data-poster') : ''
    var videoHtml = "<video id='my-video' class='video-js' controls preload='auto' style='width:100%;height:100%' poster='" + posterImg + "' data-setup='{}'>" +
          "<source  type='video/mp4' src='" + videoSrc + "'>" +
          "<source type='video/webm' src='" + videoSrc + "'>" +
          "<p class='vjs-no-js'>" +
            "To view this video please enable JavaScript, and consider upgrading to a web browser that <a href='https://videojs.com/html5-video-support/' target='_blank'>supports HTML5 video</a>" +
          '</p>' +
        '</video>'
    $('#ry-video-title').html(videoTitle)
    $('#ry-video-box').append(videoHtml)

    var myPlayer = videojs('my-video')
    videojs('my-video').ready(function () {
      var myPlayer = this
      myPlayer.play()
    })
  })

  // 关闭视屏弹窗
  $('#ry-video-close').on('click', function () {
    var myPlayer = videojs('my-video')
    myPlayer.dispose()

    $('#ry-video-popup,#ry-popup-mask').hide()
    $('#ry-video-box').empty()
    $('#ry-video-title').html('')
  })

  var swiper = new Swiper('.switch-content', {
    autoHeight: true,
    on: {
      slideChangeTransitionStart: function() {
        $('.switch .switch-item')
          .eq(this.activeIndex).addClass('active')
          .siblings().removeClass('active');
      }
    }
  })

  $('.switch .switch-item').on('click', function() {
    var i = $(this).index();
    swiper.slideTo(i);
  })
})
