(function (w, d, e, x) {
    w[e] = function () {
        w.cbk = w.cbk || []
        w.cbk.push(arguments);
    };
    x = d.createElement('script');
    x.async = true;
    x.id = 'zhichiScript';
    x.className = "pre-sales-pop-ups-btn"; //该class绑定到自定义按钮上
    x.src = 'https://chat.sobot.com/chat/frame/v2/entrance.js?sysnum=6a532efa9b3e4d2282e0dab4956d0f01';
    d.body.appendChild(x);
})(window, document, 'zc');

zc("config", {
    channelid: 23,                                      // 频道
    groupid: 'a2cc64e4dae54f95b3f3488c42a16b63',        // 客服分组
    custom: true                                        // 自定义生效
});