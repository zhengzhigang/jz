/**
 * 老员工页面
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
        var timeValue = document.getElementById('timeValue')
        var timeEnd = Number(getUrlQuery('time_end'))

        nameValue.innerText = getUrlQuery('name')
        timeValue.innerText = timeEnd ? getBeforeDate(getUrlQuery('time'), timeEnd) : getBeforeDate(getUrlQuery('time'))

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

    /*格式 getBeforeDate('2015,5,20') */
    /*
    * auth:120975587@qq.com
    * time:2015.5.6 9:45
    * ******************
    */
    function getBeforeDate(n, diff){
        var now = new Date();
        var aftertime = new Date(n);
        var year = now.getFullYear();
        var mon= now.getMonth()+1;
        var day= now.getDate();
        var year_after = aftertime.getFullYear();
        var mon_after = aftertime.getMonth()+1;
        var day_after = aftertime.getDate();
        var chs = 0;
        //获取当月的天数
        function DayNumOfMonth(Year,Month) {
            return 32 - new Date(Year,Month-1,32).getDate();
        }

        if(aftertime.getTime() - now.getTime() < 0){
            var temp1 = day_after;
            var temp2 = mon_after;
            var temp3 = year_after;
            day_after = day;
            mon_after = mon;
            year_after = year;
            day = temp1;
            mon = temp2;
            year = temp3;
        }
        if(year == year_after){//不跨年
            if(mon == mon_after){//不跨年不跨月
                chs += day_after-day;
            }else{//不跨年跨月
                chs += DayNumOfMonth(year,mon)- day+1;//加上第一个不满的
                for(var i=1;i< mon_after-mon;i++){
                    chs += DayNumOfMonth(year,mon+i);
                }
                chs += day_after-1;//加上
            }    
        }else{//存在跨年
            chs += DayNumOfMonth(year,mon)- day+1;//加上开始年份不满的一个月
            for(var m=1;m<12-mon;m++){
                chs += DayNumOfMonth(year,mon+m);
            }
            for(var j=1;j < year_after-year;j++){
                if((year+j)%400 == 0 || (year+j)%4 == 0 && (year+j)%100 != 0){
                    chs += 366;
                }else{
                    chs += 365;
                }
            }
            for(var n=1;n <= mon_after;n++){
                chs += DayNumOfMonth(year_after,n);
            }
            chs += day_after-1;
        }
        if(aftertime.getTime() - now.getTime() < 0){
            return diff ? chs - diff : chs;
        }
    }
}())
