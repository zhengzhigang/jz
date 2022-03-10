/**
 * 老员工页面
 */
void (function employee() {
    window.addEventListener('load', completed, false );
    var downbtn = document.getElementById('downloadButton')
    downbtn.addEventListener('click', function() {
      createImage()
    })

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
        var timeValue = document.getElementById('timeValue')

        nameValue.innerText = getUrlQuery('name')
        timeValue.innerText = getUrlQuery('time')
    }

    function createImage() {
      var el = document.getElementById('posterMain')
      new html2canvas(el, {
        backgroundColor: '#fff',
        scale: 1.5, // 截图清晰度
        useCORS: true // 设置图片跨域
      }).then(function(canvas) {
        let link = document.createElement('a');
        link.href = canvas.toDataURL();//下载链接
        link.setAttribute('download', '海报.png');
        link.click();
      })
    }
}())
