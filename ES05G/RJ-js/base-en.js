$(function(){

    initPage();
});


var prevWidth=deviceWidth();
function deviceWidth(){
    var winWidth = $(window).width();
    if(winWidth<=768){
        return 'xs';
    }else{
        return 'md';
    }
}
function winResize(fn){
    $(window).resize(function(){
        var curWidth = deviceWidth();
        if(curWidth!=prevWidth){
            prevWidth=curWidth;
            if(fn){
                fn();
            }
        }

    })
}

function initPage(){
   
    RJNav();
    RJMoblieNav();
    RJHeaderBar();
    RJFooterNav();
}

function RJNav(){
    $(".rj-nav").on("mouseenter",'.rj-nav-item',function(){
        var id = '#'+($(this).attr("data-id"));
        var HH = $(".rj-header").outerHeight();
        $(".rj-nav-list .rj-nav-child").removeClass('active')
        $(id).addClass('active');
        $(this).addClass('active').siblings('.rj-nav-item').removeClass('active');
        $(".rj-nav-list").stop().animate({'top':HH},600);
    });
    $(".rj-nav").on("mouseleave",'.rj-nav-item',function(){
        RJNavHide();
    })
    $(".rj-nav-list").on("mouseenter",function(){
        var HH = $(".rj-header").outerHeight();
        $(".rj-nav-list").stop().animate({'top':HH},600);
    });
    $(".rj-nav-list").on("mouseleave",function(){
        RJNavHide();
    })
}
function RJNavHide(){
    var NH =-$(".rj-nav-list").outerHeight()-100;
    $(".rj-nav-list").stop().animate({'top':NH},600);
    $(".rj-nav .rj-nav-item").removeClass('active');
}

function RJMoblieNav(){
    $(".rj-mobile-menu").click(function(){
        $(".rj-header-bar .rj-search-box").removeClass("on");
        if($(".rj-header").hasClass("on")){
            $(".rj-header").removeClass("on");
            $(".rj-nav-list").hide();
        }else{
            $(".rj-header").addClass("on");
            $(".rj-nav-list").show();
        }
    });
    $(".rj-nav-list .rj-nav-item p").click(function(){
        var father = $(this).closest('.rj-nav-item');
        if(father.hasClass('on')){
            father.removeClass('on');
            $(this).siblings(".rj-nav-child").stop().slideUp();
        }else{
            father.addClass('on');
            $(this).siblings(".rj-nav-child").stop().slideDown();
        }
    })
}

function RJHeaderBar(){
    $(".rj-header").on('click','.rj-header-bar .rj-icon',function(e){
        e.stopPropagation();
        var father = $(this).parent();
        if(father.hasClass('on')){
            father.removeClass('on');
        }else{
            father.addClass('on').siblings().removeClass('on');
        }
    });
    $(".rj-search-box .rj-icon-search").click(function(){
        $(".rj-header").removeClass("on");
        $(".rj-nav-list").hide();
    })
    $(document).on('click',function(e){
        var evt = $(e.target);
        if(!evt.hasClass('.rj-header-bar') && evt.closest(".rj-header-bar").length<1){
            $(".rj-header-bar").children().removeClass('on');
        }
    })
}

function RJFooterNav(){
    $(".rj-footer-nav .rj-footer-list dt").click(function(){
        if(deviceWidth()!="xs") return;
        var father = $(this).closest('.rj-footer-list');
        if(father.hasClass('active')){
            father.removeClass('active');
            $(this).siblings().stop().slideUp();
        }else{
            father.addClass('active');
            $(this).siblings().stop().slideDown();
        }
    })
}