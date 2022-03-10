$(function () {

    //睿网络介绍
    $("#ry-intro-tab li a").on("click", function () {
        $(this).addClass("ry-this").parent("li").siblings("li").find("a").removeClass("ry-this");
        $("#ry-intro-tab-wrap").addClass("ry-tab-fixed");
        var h = $("#ry-intro-tab-wrap").height();
        var _h = $("#ry-header-wrap").height();
        var id = $(this).attr("href");
        var H = $(id).offset().top;
        $("html,body").animate({
            "scrollTop": H - h - _h
        });
    });

    var tabOffsetTop = $("#ry-intro-tab-wrap").offset().top;
    var _h = $("#ry-intro-tab-wrap").height() + 40;
    var rPro_top = $("#rPro").offset().top - _h;
    var rService_top = $("#rService").offset().top - _h;
    var rScene_top = $("#rScene").offset().top - _h;
    var rCase_top = $("#rCase").offset().top - _h;
    var rZxun_top = $("#rZxun").offset().top - _h;


    $(window).scroll(function () {
        var _h = $(this).scrollTop();
        var _top = $("#ry-header-wrap").height() + $("#ry-intro-tab-wrap").height();
        if (_h > tabOffsetTop) {
            $("#ry-intro-tab-wrap").addClass("ry-tab-fixed");
           
        } else {
            $("#ry-intro-tab-wrap").removeClass("ry-tab-fixed");

        }

        if (_h > rZxun_top - _top) {
            set_this("rZxun");
        } else if (_h > rCase_top - _top) {
            set_this("rCase");
        } else if (_h > rScene_top - _top) {
            set_this("rScene");
        } else if (_h > rService_top - _top) {
            set_this("rService");
        } else if (_h > rPro_top - _top) {
            set_this("rPro");
        }

    });

    function set_this(dataId) {
        $("#ry-intro-tab li a").removeClass("ry-this");
        $("#ry-intro-tab li a[data-id='" + dataId + "']").addClass("ry-this");
    }

    //展开视频弹窗
    $(".ry-rService-video").on("click", function () {
        $("#ry-video-popup,#ry-popup-mask").show();
		
        //追加视频代码
		var videoSrc=$(this).attr("data-src");
		var videoTitle=$(this).attr("data-title")?$(this).attr("data-title"):"";
		var posterImg=$(this).attr("data-poster")?$(this).attr("data-poster"):"";
		var videoHtml="<video id='my-video' class='video-js' controls preload='auto' style='width:100%;height:100%' poster='"+posterImg+"' data-setup='{}'>"+
					"<source  type='video/mp4' src='"+videoSrc+"'>"+
					"<source type='video/webm' src='"+videoSrc+"'>"+
					"<p class='vjs-no-js'>"+
					  "To view this video please enable JavaScript, and consider upgrading to a web browser that <a href='https://videojs.com/html5-video-support/' target='_blank'>supports HTML5 video</a>"+
					"</p>"+
				"</video>";
		$("#ry-video-title").html(videoTitle);
		$("#ry-video-box").append(videoHtml);
		
		
		var myPlayer = videojs('my-video');
	    videojs("my-video").ready(function(){
	        var myPlayer = this;
	        myPlayer.play();
	    });
    });
	
	
    //关闭视屏弹窗
    $("#ry-video-close").on("click", function () {
        
        var myPlayer = videojs('my-video');
        myPlayer.dispose();
        
        $("#ry-video-popup,#ry-popup-mask").hide();
        $("#ry-video-box").empty();
        $("#ry-video-title").html("");
      
    });
});