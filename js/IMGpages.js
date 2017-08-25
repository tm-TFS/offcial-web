
var aa=$(".img_container a").length;
checkPage(aa);
$(".app_cases_show_head li").click(function(){
	$(".img_container").css({"left":0});
	var index=$(this).index();
	$(this).addClass("checked_style").siblings("li").removeClass("checked_style");
	if(index==0){
		checkPage(aa);
		$(".img_container a").fadeIn();	
	}
	if(index==1){
		checkPage(6);
		$(".img_container a").hide();
		$(".img_container .o2o").fadeIn();	
	}
	if(index==2){
		checkPage(8);
		$(".img_container a").hide();
		$(".img_container .social").fadeIn();	
	}
	if(index==3){
		checkPage(4);
		$(".img_container a").hide();
		$(".img_container .move").fadeIn();	
	}
	if(index==4){
		checkPage(8);
		$(".img_container a").hide();
		$(".img_container .intelligent").fadeIn();	
	}
	if(index==5){
		checkPage(2);
		$(".img_container a").hide();
		$(".img_container .html5").fadeIn();	
	}
});
function checkPage(aNum){
	var num=parseInt(aNum/2)+1;console.log(num)
	var wid=num*($(".img_container a").width()+10)
	$(".img_container").width(wid);
	var pages=''
	var pageNum=parseInt(aNum/6)+1;
	
	for(var i=0;i<pageNum;i++){
		pages+='<li></li>'
	}
	$(".page_diff").html(pages);
	var change=($(".img_container a").width()+10)*3;
	$(".page_diff li").mouseover(function(){
		var ind=$(this).index();
		$(".img_container").animate({
			"left":-ind*change+'px'
		},500)
	})
}

