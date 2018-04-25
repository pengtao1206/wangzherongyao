$(function(){
	//回顶
	var timer;
	$(".backTop").hover(function(){
		$(this).css({
			"transition":"all 0.2s",
			"background-position-y":"-50px",
		});
	},function(){
		$(this).css({
			"transition":"",
			"background-position-y":"",
		});
	})
	function back(){
		if (document.body.scrollTop==0&&document.documentElement.scrollTop==0){
			clearInterval(timer);
			setTimeout(function(){
				$(".backTop_wrap").removeClass("animated bounceOutUp");
			},1000)
		}else{
			document.body.scrollTop-=50;
			document.documentElement.scrollTop-=50;
		}
	}
	window.onscroll=function(){
		if (document.body.scrollTop>=100||document.documentElement.scrollTop>=100){
			$(".backTop_wrap").fadeIn();
			
		}else{
			$(".backTop_wrap").fadeOut();
			
		}
	}
	$(".backTop").click(function(){
		$(".backTop_wrap").fadeOut().addClass("animated bounceOutUp");
		timer=setInterval(back,1);
	})
	$(".callMe").hover(function(){
		$(this).css({
			"transition":"all 1s",
			"width":"235px",
			"background-position-x":"0px",
			
		});
		$(this).addClass("animated rubberBand");
	},function(){
		$(this).css({
			"transition":"",
			"width":"87px",
			"background-position-x":"-148px",
		});
		$(this).removeClass("animated rubberBand");
	})
	//回顶
})
