/**
 * 获奖人页面
 */
void (function employee() {
    console.time('============')
    // window.addEventListener('load', completed, false );
    completed()
    var downbtn = document.getElementById('downloadButton')
    downbtn.addEventListener('click', function() {
      createImgDiv()
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
        var yearValue = document.getElementById('yearValue')
        var prizeValue = document.getElementById('prizeValue')



        nameValue.innerText = getUrlQuery('name')
        yearValue.innerText = getUrlQuery('year')
        prizeValue.innerText = getUrlQuery('prize')
        // document.getElementById('posterMain').style.display = 'block'

        console.timeEnd('============')
    }

    function createImage() {
      var el = document.getElementById('posterMain')
      new html2canvas(el, {
        backgroundColor: '#fff',
        scale: 1.5, // 截图清晰度
        useCORS: true // 设置图片跨域
      }).then(function(canvas) {
        var url = canvas.toDataURL();
        if (isWx()) {
          var img = document.getElementById('ceratedImg')
          img.src = url
          img.style.display = 'block'
          showToast()
        } else {
          let link = document.createElement('a');
          link.href = url //下载链接
          link.setAttribute('download', '海报.png');
          link.click();
        }
      })
    }

    function isWx() {
        var ua = window.navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i) == 'micromessenger'){
            return true;
        }else{
            return false;
        }
    }

    // 弹出toast
    function showToast() {
      var toast = document.getElementById('toast')

      toast.style.display = 'block'
      setTimeout(function() {
        toast.style.display = 'none'
      }, 3000)
  }
}())
