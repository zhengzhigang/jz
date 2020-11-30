$(function () {
    $.extend({
        /*
        初始化分页
        */
        InitPagination: function (parameter) {
            var wrap = $(parameter.wrap);
            var count = parseInt(parameter.count);
            var pageSize = parseInt(parameter.pageSize);
            var pageIndex = parseInt(parameter.pageIndex);
            var pageCount = Math.ceil(count / pageSize);
            var pageButtonSize = parseInt(parameter.pageButtonSize || 5);
            var num = pageCount < pageButtonSize ? pageCount : pageButtonSize;
            wrap.empty();
            wrap.append('<a href="javascript:void(0)" id="prev">上一页</a>');
            var strPage = '';
            for (var i = 1; i <= num; i++) {
                var active;
                var page;
                if (pageIndex < Math.ceil(pageButtonSize / 2)) {
                    active = pageIndex;
                    page = 0;
                } else if (pageCount - pageIndex <= parseInt(pageButtonSize / 2)) {
                    active = num - (pageCount - pageIndex);
                    page = pageIndex - (num - (pageCount - pageIndex))
                }
                else {
                    active = Math.ceil(pageButtonSize / 2);
                    page = pageIndex - Math.ceil(pageButtonSize / 2);
                }
                strPage += '<a href="javascript:void(0)" class=' + (active == i ? "ry-this" : "") + '>' + parseInt(page+i) + '</a>';
            }
            wrap.append('<div class="ry-pages">' + strPage + '</div>');
            wrap.append('<a href="javascript:void(0)" id="next">下一页</a>');

            //分页按钮
            $('.ry-pages a', wrap).on("click", function () {
                if (pageIndex != $(this).text()) {
                    parameter.onPageChange($(this).text(), pageSize);
                }
            });
            //上一页
            if (pageIndex != 1) {
                $('#prev', wrap).on("click", function () {
                    parameter.onPageChange(pageIndex - 1, pageSize);
                });
            }
            //下一页
            if (pageIndex != pageCount) {
                $('#next', wrap).on("click", function () {
                    parameter.onPageChange(pageIndex + 1, pageSize);
                });
            }
        }
    });
});
