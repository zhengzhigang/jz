$(function() {
	
	//搜索结果的tab切换
	$(".ry-crumbNav-tab .ry-crumbNav-tab-item").on("click",function(){
		var i=$(".ry-crumbNav-tab .ry-crumbNav-tab-item").index(this);
		$(this).addClass("ry-this").siblings(".ry-crumbNav-tab-item").removeClass("ry-this");
		$(".ry-cont-item-search .ry-cont").eq(i).removeClass("ry-hide").siblings(".ry-cont").addClass("ry-hide");
	});
		
});