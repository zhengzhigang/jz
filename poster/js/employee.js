/**
 * 新员工页面
 */

void (function employee() {
    window.addEventListener('load', completed, false );

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
        var reg = /\d+/g
        var nameValue = document.getElementById('nameValue')
        var yearValue = document.getElementById('yearValue')
        var monthValue = document.getElementById('monthValue')
        var yearMatch = getUrlQuery('year').match(reg)

        nameValue.innerText = getUrlQuery('name')
        yearValue.innerText = yearMatch[0]
        monthValue.innerText = yearMatch[1]
    }
}())
