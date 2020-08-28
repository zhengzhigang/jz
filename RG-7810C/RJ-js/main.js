var PAGE = {
    init: function () {
        this.initDialog()
    },
    initDialog: function() {
        var dialogImg = [
            './RJ-img/dialog-01.gif',
            './RJ-img/dialog-02.gif',
            './RJ-img/dialog-03.gif',
            './RJ-img/dialog-04.gif',
            './RJ-img/dialog-05.gif',
            './RJ-img/dialog-06.gif',
            './RJ-img/dialog-07.gif',
            './RJ-img/dialog-08.gif',
            './RJ-img/dialog-09.gif'
        ]
        var area = $('.area');
        var diaBox = $('.zg-dialog');
        var dia = $('.dialog-img');
        area.on('click', function() {
            var i = $(this).data('index');
            dia.attr('src', dialogImg[i - 1]);
            diaBox.fadeIn();
        })
        $('.zg-dialog').on('click', function(e) {
            e = window.event || e
            diaBox.fadeOut();
        })

        $('.zg-dialog').on('click', '.close', function(e) {
            diaBox.fadeOut();
        })

        $('.zg-dialog').on('click', '.content', function(e) {
            e.stopPropagation();
        })

        // 播放视频
        // $('#ws-pro-de-vidio').on('click', function() {
        //     console.log(1111111)
        //     // var video = $('#ws-pro-de-vidio');
        //     // video[0].play();
        //     $(this)[0].play()
        // })

        $('.click-mask').on('click', function() {
            var video = $('#ws-pro-de-vidio');
            video[0].play();
            $(this).hide()
        })
    }
}

$(function() {
    PAGE.init();
})