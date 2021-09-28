/**
 * Created by yanhuadong on 2016/9/22.
 */
(function(win,doc){
    win.onload=win.onresize=function(){
        doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/1920+'px';
        if(doc.documentElement.clientWidth<1200){
            //doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/1200+'px';
            doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/1400+'px';
        }
        if(doc.documentElement.clientWidth<750){
            doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/750+'px';
        }
        //if(doc.documentElement.clientWidth<750){
        //    doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/900+'px';
        //}
    };
})(window,document);


