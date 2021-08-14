$(function() {
	//宽度为768时重新加载
	var flag = false;
	var width = $(window).width();
	if(width <= 768) {
		flag = true;
	}
	$(window).resize(function() {
		var curwidth = $(window).width();
		if(!flag) {
			if(curwidth <= 768) {
				flag = true;
				window.location.reload();
			}
		} else {
			if(curwidth > 768) {
				flag = false;
				window.location.reload();
			}
		}
	});
});