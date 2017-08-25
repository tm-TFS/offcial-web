//pc
(function(){
//fullPage
	
    $('#dowebok').fullpage({
        controlArrows: false,
        verticalCentered:false,
        loopTop:false,
        autoScrolling:false,
        scrollOverflow:false,
        scrollingSpeed:1500
    });
    setInterval(function(){
        $.fn.fullpage.moveSlideRight();
    }, 5000);
    //滚动条事件
    $(document).scroll(function(){
    	var nav_side=$(".nav_side_btn");
        var nav_btn=$(".nav_sections");
    	var scroll=$(document).scrollTop();
    	var show=$(".section").eq(1).offset().top;
    	if(scroll>=show){
    		nav_side.fadeIn();nav_btn.fadeIn();
    		$('.chart').easyPieChart({
		        animate: 2000,
		        size:180,
		        lineWidth: 9,   //外圈宽度
		        scaleColor: false,	
		        trackColor: "#000",		//外圈底色
		        barColor:"#fff"			//外圈颜色
		    });
    	}else{
    		nav_side.fadeOut();;nav_btn.fadeOut();
    	};
    	$(".nav_title a").each(function(){
     		var page=$(this).attr("data-id")-1;
			var section=$(".section").eq(page).offset().top;
			var top=$(".section").eq(page).offset().top;
    		var bot=$(".section").eq(page).height()+top;
    		if(scroll>=(top)&&scroll<=bot){
    			$(this).addClass("active").parent("li").siblings("li").children("a").removeClass("active");
    		}
     	})
    })
    //导航跳转
    var le=-250;
	$(".nav_btn").click(function(){
		var pa=$(this).parents(".nav_section");
		le==0? le=-250:le=0;
		console.log(le)
		pa.stop().animate({"left":le},300);
	});
    $("#back_Top").click(function(){
    	$.fn.fullpage.moveTo(1);
    });
    $(".nav_title a").click(function(){
    	$(this).addClass("active").parent("li").siblings("li").children("a").removeClass("active");
    	var page=$(this).attr("data-id");
    	$.fn.fullpage.moveTo(page);
    });
//back-qq-email
	$('.side_nav_bar a').mouseover(function(){
		$(this).find("span").show();
		$(this).mouseout(function(){
			$(this).find("span").hide();
		})
	})
	//子项-服务流程-lunbo
	lunbo();
	function lunbo(){
		var lunbo=0;
		setInterval(function(){
			lunbo++;
			if(lunbo=='8')
			{lunbo=0;}
			$(".service_flow_lineChart .flow_list").eq(lunbo).attr("id","check_style").siblings(".service_flow_lineChart .flow_list").attr("id","");
		},2000);
	};
})();
