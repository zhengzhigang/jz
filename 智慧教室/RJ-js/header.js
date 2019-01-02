$(function(){
    mnav ();
    function mnav () {
            $(".mobile-menu").on("click", function () {
                if (!$(this).hasClass("tc")) {
                    $(".nav-list").stop().slideDown();
                } else {
                    $(".nav-list").stop().slideUp();
                }
                $(this).toggleClass("tc");
            });
        $(".mobile-search").on("click", function () {
            $(".mobile-search-box").stop(true,true).slideToggle();
        })
            $(".nav-list .nav-list-child .tit-a .addbtn").on("click",function(){
                var index =$(this).parents(".nav-list-child").index();
                var that = $(this).parents(".nav-list-child");
                if (!that.hasClass("on")) {
                    that.siblings().removeClass("on").find("ul").stop().slideUp();
                        that.addClass("on").find("ul").stop().slideDown(function(){
                           var top =  that.offset().top-$(".nav-list ol").offset().top-$(".header").outerHeight();
                            $(".nav-list").stop().animate({"scrollTop":top});
                        });
                } else {
                    that.removeClass("on").find("ul").stop().slideUp(function(){
                        $(".nav-list").stop().animate({"scrollTop":0});
                    });
                }
            })
    }
    pcnav();
    function pcnav () {
        $(".nav li:last").addClass("last");
        $(".nav li").mouseenter(function (e) {
            e.preventDefault();
            $(this).addClass("on").siblings().removeClass("on");
            var index = $(this).index();
            if(index<1){
                return false;
            }else{
                $(".nav-list ol>li").eq(index-1).show().siblings().hide();
                if( $(".nav-list").stop() && parseInt($(".nav-list").css("top")) < 0) {
                    $(".nav-list").stop(true, true).animate({"top": $(".header").height()}, 600);
                }
            }
			nav_set_line();
        }).mouseleave(function(e){
            var evt = $(e.relatedTarget);
            if( evt.closest(".nav-list").length <1 && !evt.hasClass("nav-list") ){
                $(".nav li").removeClass("on");
                $(".nav-list").stop(true, true).animate({"top":-333},600);
            }
        })
        $(".nav-list").mouseleave(function(e){
            var evt = $(e.relatedTarget);
            if( evt.closest(".nav").length <1 && !evt.hasClass("nav") || evt.closest(".nav li").index("li") == 0 ){
                $(".nav li").removeClass("on");
                $(".nav-list").stop(true, true).animate({"top":-333},600);
            }
        })
    }
//头部分割线
	
	function nav_set_line(){
		
		$('.nav-list-child').each(function(){
			var _self=$(this);
			var _li_num=_self.find('.ul-child').length;
			//var _cur_height=_self.height();
			var _cur_height=200;
			var _html='<div class="sa-fun-add-line"></div>';
			
			for(var i=0;i<_li_num-1;i++){
				_self.find('.ul-child').eq(i).find('.sa-fun-add-line').remove();
				_self.find('.ul-child').eq(i).append(_html);
				$('.sa-fun-add-line').css({'height':_cur_height});
			}
			
		});
		
	}
    $(window).scroll(function(){
        var width = $(window).width();
        if(width>1024){
            $(".nav li").removeClass("on");
            $(".nav-list").stop(true, true).animate({"top":-333},600);
            var top = $(document).scrollTop();
            var speed = 200;
            if(top!=0){
                $(".header").addClass("on").stop().animate({"height":55},speed);
                $(".header .logo").stop().animate({"top":0,"height":55},speed);
                $(".header .nav").stop().animate({"marginTop":0},speed);
                $(".header .header-r").stop(true,true).fadeOut(speed);
                $(".header .header-in .nav ul li a").stop().animate({"line-height":56},speed);

            }else {
                $(".header").removeClass("on").stop().animate({"height":130},speed);
                $(".header .logo").stop().animate({"top":30,"height":70},speed);
                $(".header .nav").stop().animate({"marginTop":54},speed);
                $(".header .header-r").stop(true,true).fadeIn(speed);
                $(".header .header-in .nav ul li a").stop().animate({"line-height":76},speed);
            }
        }
    });
    $(window).scroll(function(){
        var width = $(window).width();
            var top = $(document).scrollTop();
            var speed = 300;
            if(top!=0){
                $(".sh-header").addClass("on").stop().animate({"height":50},500);

            }else {
                $(".sh-header").removeClass("on").stop().animate({"height":100},speed);
            }
        
    });
    var _heightLiMenu = $(".sh-mobile-menu").find("li").height();
    var _lengthLiMenu = $(".sh-mobile-menu").find("li").length;
    var _allHeightUl = _heightLiMenu*_lengthLiMenu;
    document.addEventListener("click",function(e){
    	e.stopPropagation();
    	var target = $(e.target);
    	if(target.hasClass("sh-mobile-menu") || target.hasClass("sh-mobile-nav")){
    		$(".sh-mobile-menu").show().animate({"height":_allHeightUl});
    	}else{
    		$(".sh-mobile-menu").animate({"height":"0px"}).hide();
    	}
    },false)
    
    
})
