/**
 * 获奖人页面
 */
void (function employee() {
    window.addEventListener( "load", completed, false );

    // 取地址栏参数
    function getUrlQuery (name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
        var search = decodeURIComponent(window.location.search)
        var r = search.substr(1).match(reg)
        if (r !== null) {
            return unescape(r[2])
        } else {
            return null
        }
    }

    function completed() {
        var nameValue = document.getElementById('nameValue')
        var yearValue = document.getElementById('yearValue')
        var prizeValue = document.getElementById('prizeValue')

        nameValue.innerText = getUrlQuery('name')
        yearValue.innerText = getUrlQuery('year')
        prizeValue.innerText = getUrlQuery('prize')
    }
}())
