/**
 * 新员工页面
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
        var reg = /\d+/g
        var nameValue = document.getElementById('nameValue')
        var yearValue = document.getElementById('yearValue')
        var monthValue = document.getElementById('monthValue')
        var nameValueCopy = document.getElementById('nameValueCopy')
        var yearValueCopy = document.getElementById('yearValueCopy')
        var monthValueCopy = document.getElementById('monthValueCopy')
        var yearMatch = getUrlQuery('year').match(reg)

        nameValue.innerText = getUrlQuery('name')
        yearValue.innerText = yearMatch[0]
        monthValue.innerText = yearMatch[1]
        nameValueCopy.innerText = getUrlQuery('name')
        yearValueCopy.innerText = yearMatch[0]
        monthValueCopy.innerText = yearMatch[1]
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
