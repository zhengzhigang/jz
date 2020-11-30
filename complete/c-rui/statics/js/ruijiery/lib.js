$('.btn-pop').click(function(e){            
    $('.m-nav').stop().slideToggle(400);
    e.stopPropagation();
});
function openLive800Window(chatURL)
{
	var enterurl=document.URL;
	var pagereferrer=document.referrer;
	chatURL=chatURL+"&enterurl="+enterurl+"&pagereferrer="+pagereferrer;
	try{
		window.open(chatURL,"在线客服","toolbar=0,scrollbars=0,location=0,menubar=0,resizable=1,width=800,height=600");
	}catch(e){}
}

$("#AfterSaleTalk,#mAfterSaleTalk").click(function () {
    window.open("https://ocs.ruijie.com.cn/?p=smb", "在线客服", "toolbar=0,scrollbars=0,location=0,menubar=0,resizable=1,width=1156,height=814")
});