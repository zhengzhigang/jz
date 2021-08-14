(function ($, window, document) {

    $(window).load(function () {

        if ($(window).scrollTop() >= 10) {
            $("#ry-container").addClass("ry-before-show");
        } else {
            $("#ry-container").removeClass("ry-before-show");
        }
        
        //菜单浮动
         if ($(window).scrollTop() >= 10) {
            $("#ry-header").addClass("ry-fixed");
        } else {
            $("#ry-header").removeClass("ry-fixed");
        }

        //在非主页时显示导航菜单的“首页”
        if ($("#ry-container").attr("data-role") == "home") {
            $("#ry-nav>li[data-role='home']").addClass("ry-hide");
            $("#ry-ol-nav>li[data-role='home']").addClass("ry-hide");
        } else {
            $("#ry-nav>li[data-role='home']").removeClass("ry-hide");
            $("#ry-ol-nav>li[data-role='home']").removeClass("ry-hide");
        }

        /*pc menu*/
        if ($(window).innerWidth() > 1024) {
            pcNav();
        }


        /*pc menu*/
        function pcNav() {
            $("#ry-nav>li>a").mouseenter(function (e) {
                e.preventDefault();
                $(this).parent("li").addClass("ry-this").siblings().removeClass("ry-this");
                var index = $(this).parent("li").index();

                var flag = false;
                var dataRole = $(this).parent("li").attr("data-role");
                if (dataRole && dataRole.indexOf("ry-nav-") != -1) {
                    flag = true;
                    $("#ry-container").addClass("ry-before-show");

                }

                if ($("#ry-nav-wrap>ol>li").eq(index).length && flag) {
                    $("#ry-nav-wrap>ol>li").eq(index).show().siblings().hide();
                    if ($("#ry-nav-wrap").stop() && parseInt($("#ry-nav-wrap").css("top")) < 0) {

                        var _divEle = document.querySelector('#ry-container');
                        var _bgColor = window.getComputedStyle(_divEle, '::before').getPropertyValue('background-color');
                        var _bg = window.getComputedStyle(_divEle, '::before').getPropertyValue('background');

                        $("#ry-header").css({
                            "background-color": _bgColor,
                            "background": _bg
                        });

                        $("#ry-nav-wrap").stop(true, true).animate({
                            "top": 0
                        }, 600);
                    }
                } else {
                    $("#ry-nav-wrap").stop(true, true).animate({
                        "top": -$("#ry-nav-wrap").outerHeight()
                    }, 600, function () {

                        var _top = $("#ry-nav-wrap").css("top");
                        var _wScrollTop = $(window).scrollTop();

                        if (_wScrollTop <= 0 && parseInt(_top) < 0) {
                            $("#ry-container").removeClass("ry-before-show");
                        }

                        $("#ry-header").css({
                            "background-color": "transparent",
                            "background": "none"
                        });
                    });
                }

            }).mouseleave(function (e) {
                var evt = $(e.relatedTarget);
                if (evt.closest("#ry-nav-wrap").length < 1 && !evt.hasClass("ry-nav-wrap")) {
                    $("#ry-nav>li").removeClass("ry-this");
                    $("#ry-nav-wrap").stop(true, true).animate({
                        "top": -$("#ry-nav-wrap").outerHeight()
                    }, 600, function () {
                        var _top = $("#ry-nav-wrap").css("top");
                        var _wScrollTop = $(window).scrollTop();
                        if (_wScrollTop <= 0 && parseInt(_top) < 0) {
                            $("#ry-container").removeClass("ry-before-show");
                        }

                        $("#ry-header").css({
                            "background-color": "transparent",
                            "background": "none"
                        });
                    });
                }
            });


            $("#ry-nav-wrap").mouseleave(function (e) {
                var evt = $(e.relatedTarget);
                if (evt.closest("#ry-nav").length < 1 && !evt.hasClass("ry-nav") || evt.closest("#ry-nav>li").index("li") == 0) {
                    $("#ry-nav>li").removeClass("ry-this");
                    $("#ry-nav-wrap").stop(true, true).animate({
                        "top": -$("#ry-nav-wrap").outerHeight()
                    }, 600, function () {
                        var _top = $("#ry-nav-wrap").css("top");
                        var _wScrollTop = $(window).scrollTop();
                        if (_wScrollTop <= 0 && parseInt(_top) < 0) {
                            $("#ry-container").removeClass("ry-before-show");
                        }

                        $("#ry-header").css({
                            "background-color": "transparent",
                            "background": "none"
                        });
                    });
                }
            });
        }



        /*mobile menu*/
        mobileNav();
        function mobileNav() {
            $("#ry-mobile-nav-btn").on("click", function () {
                if (!$(this).hasClass("ry-this")) {
                    $("#ry-nav-wrap").stop().slideDown();
                    $("#ry-ol-nav").stop().animate({
                        "scrollTop": 0
                    });
                    $(".ry-pro-list").removeClass("ry-this");
                    if ($(window).width() <= 768) {
                        $(".ry-pro-list").find("ul").stop().slideUp();
                    } else {
                        $(".ry-pro-list").find("ul").stop().slideDown();
                    }

                    var _divEle = document.querySelector('#ry-container');
                    var _bgColor = window.getComputedStyle(_divEle, '::before').getPropertyValue('background-color');
                    var _bg = window.getComputedStyle(_divEle, '::before').getPropertyValue('background');

                    $("#ry-header").css({
                        "background-color": _bgColor,
                        "background": _bg
                    });

                } else {
                    $("#ry-nav-wrap").stop().slideUp(function () {
                        $("#ry-header").css({
                            "background-color": "transparent",
                            "background": "none"
                        });
                    });

                }
                $(this).toggleClass("ry-this");
                $("#ry-nav-wrap>ol>li").removeClass('ry-this').find(".ry-ol-subnav-cont").stop().slideUp();
            });

            $("#ry-nav-wrap>ol>li>h2>em").on("click", function () {
                var index = $(this).parents(".ry-ol-nav-item").index();
                var that = $(this).parents(".ry-ol-nav-item");
                if (!that.hasClass("ry-this")) {
                    that.siblings().removeClass("ry-this").find(".ry-ol-subnav-cont").stop().slideUp();
                    that.addClass("ry-this").find(".ry-ol-subnav-cont").stop().slideDown(function () {
                        var top = that.offset().top - $("#ry-header").outerHeight();
                        var _top = $(window).scrollTop();
                        $("#ry-ol-nav").stop().animate({
                            "scrollTop": Math.abs(top - _top)
                        });
                    });
                } else {
                    that.removeClass("ry-this").find(".ry-ol-subnav-cont").stop().slideUp(function () {
                        $("#ry-ol-nav").stop().animate({
                            "scrollTop": 0
                        });
                    });
                }
            });

            $(".ry-subnav-toggle").on("click", function () {

                var that = $(this).parents(".ry-pro-list");
                if (!that.hasClass("ry-this")) {
                    $(".ry-pro-list").removeClass("ry-this").find("ul").stop().slideUp();
                    that.addClass("ry-this").find("ul").stop().slideDown(function () {
                        $("#ry-ol-nav").stop().animate({
                            "scrollTop": 0
                        }, -100, function () {
                            var top = that.offset().top - $("#ry-header").outerHeight();
                            var _top = $(window).scrollTop();
                            $("#ry-ol-nav").stop().animate({
                                "scrollTop": Math.abs(top - _top)
                            });
                        });
                    });

                } else {
                    that.removeClass("ry-this").find("ul").stop().slideUp(function () {
                        $("#ry-ol-nav").stop().animate({
                            "scrollTop": 0
                        });
                    });

                }
            })

        }

        $(window).scroll(function () {
            var width = $(window).width();
            var status = $("#ry-nav>li[data-role='ry-nav-pro']").hasClass("ry-this");
            if (width > 1024) {
                $("#ry-nav>li").removeClass("ry-this");
                $("#ry-nav-wrap").stop(true, true).animate({
                    "top": -$("#ry-nav-wrap").outerHeight()
                }, 600, function () {
                    var _top = $("#ry-nav-wrap").css("top");
                    var _wScrollTop = $(window).scrollTop();
                    if (_wScrollTop <= 0 && parseInt(_top) < 0) {
                        $("#ry-container").removeClass("ry-before-show");
                    }

                });
            }

        });

        $(window).scroll(function () {
//          var _top = $(this).scrollTop();
//          if (_top >= 10) {
//              $("#ry-container").addClass("ry-before-show");
//          } else {
//              $("#ry-container").removeClass("ry-before-show");
//          }
//          单独出文件



             if ($(window).scrollTop() >= 10) {
	            $("#ry-header").addClass("ry-fixed");
	        } else {
	            $("#ry-header").removeClass("ry-fixed");
	        }
        });

        //pc search
        $("#ry-search-toggle").on("click", function () {
            $("#ry-search-input").val("");//清空输入框
            if ($(this).hasClass("ry-this")) {
                $(this).removeClass("ry-this");
                $("#ry-search").removeClass("ry-this");
                $("#ry-nav").stop().fadeIn();
            } else {
                $(this).addClass("ry-this");
                $("#ry-nav").stop().fadeOut();
                $("#ry-search").addClass("ry-this");
            }
        });


        //mobile search
        $("#ry-search-toggle-mobile").on("click", function () {
            $("#ry-search-input").val("");//清空输入框
            if ($(this).hasClass("ry-this")) {
                $(this).removeClass("ry-this");
                $("#ry-search").removeClass("ry-this");
                $("#ry-logo").stop().fadeIn();
            } else {
                $(this).addClass("ry-this");
                $("#ry-logo").stop().fadeOut();
                $("#ry-search").addClass("ry-this");
            }
        });

        //搜索
        $("#ry-search-btn").click(function () {
            var key = $("#ry-search-input").val();
            if (key != "") {
                window.location.href = "/search/searchlist?key=" + key;
            }
        });

        //回车搜索
        $("#ry-search-input").keydown(function (e) {
            if (e.keyCode == 13) {
                $("#ry-search-btn").trigger("click");
            }
        });
    });

})(jQuery, window, document);
