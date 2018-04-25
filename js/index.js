$(function(){
	//引入回顶
	$(".backTopWrap").load("backTop.html");
	//引入回顶
	
	//引入导航页
	$(".header").load("header.html");
	//引入导航页
	
	//引入底部
	$(".borderWrap").load("footer.html");
	//引入底部
	
	//满屏轮播
	$(".buttonUp").hover(function(){
		$(this).find(".moveIn").hide();
		$(this).find(".moveOut").show().addClass("animated rubberBand");
	},function(){
		$(this).find(".moveOut").hide();
		$(this).find(".moveIn").show();
	})
	$(".buttonDown").hover(function(){
		$(this).find(".moveIn").hide();
		$(this).find(".moveOut").show().addClass("animated rubberBand");
	},function(){
		$(this).find(".moveOut").hide();
		$(this).find(".moveIn").show();
	})
	
	var index=0;
	
	$(".moveImg0_1").show().addClass("animated bounceInLeft");
	setTimeout(function(){
		$(".moveImg0_2").show().addClass("animated bounceInRight");
	   	$(".moveImg0_3").show().addClass("animated fadeIn");
	},200)

	
	function changeAll(){
		$(".span").hide();
		$(".span").eq(index).show();
		
		$(".banner_drop a").removeClass("on");
		$(".banner_drop a").eq(index).addClass("on");
	}

	$(".banner_buttonDown").click(function(){
		if(index==2){
			index=0;
		}else{
			index++;
		};
		//alert(index);
		changeAll();
	})
	$(".banner_buttonUp").click(function(){
		if(index==0){
			index=2;
		}else{
			index--;
		};
		changeAll();
	})
	$(".banner_drop a").click(function(){
		index=$(this).index();
		//alert($(this).index())
		changeAll();
	})
	//满屏轮播


	


	//第二轮播
	var indexs=0;
	function left(){
		//清除
		$(".banner_imgBox img").removeClass("animated bounceInRight");
		$(".banner_rightBox_title").removeClass("animated bounceInRight");
		$(".banner_rightBox_cont").removeClass("animated bounceInRight");
		
		//添加
		$(".banner_imgBox img").addClass("animated bounceInLeft");
		$(".banner_rightBox_title").addClass("animated bounceInLeft");
		$(".banner_rightBox_cont").addClass("animated bounceInLeft");
		//$(".moveImg0_3").show().addClass("animated fadeIn");
	}
	function right(){
		//清除
		$(".banner_imgBox img").removeClass("animated bounceInLeft");
		$(".banner_rightBox_title").removeClass("animated bounceInLeft");
		$(".banner_rightBox_cont").removeClass("animated bounceInLeft");
		
		//添加
		$(".banner_imgBox img").addClass("animated bounceInRight");
		$(".banner_rightBox_title").addClass("animated bounceInRight");
		$(".banner_rightBox_cont").addClass("animated bounceInRight");
		//$(".moveImg0_3").show().addClass("animated fadeIn");

	}
	$(".changeDrop").hover(function(){
		$(this).css({
			"transition":"all 0.2s",
			"background-position-y":"-11px",
		});
	},function(){
		$(this).css({
			"transition":"",
			"background-position-y":"",
		});
	})
	function changeBear(){
		$(".banner_imgBox img").hide();
		$(".banner_imgBox img").eq(indexs).show();
		
		$(".banner_rightBox_title").hide();
		setTimeout(function(){
			$(".banner_rightBox_title").eq(indexs).show();
		},200)
		
		$(".banner_rightBox_cont").hide();
		setTimeout(function(){
			$(".banner_rightBox_cont").eq(indexs).show();
		},400)
		
		$(".clickDrop").hide();
		$(".changeDrop").eq(indexs).find(".clickDrop").fadeIn();
	}
	$(".works_button .buttonDown").click(function(){
		if(indexs==5){
			indexs=0;
		}else{
			indexs++;
		};
		right();
		changeBear();
	})
	$(".works_button .buttonUp").click(function(){
		if(indexs==0){
			indexs=5;
		}else{
			indexs--;
		};
		left();
		changeBear();
		
	})
	$(".changeDrop").click(function(){
		var oldIndexs=indexs;
		//alert(oldIndexs)
		indexs=$(this).index()/2;
		//alert(indexs);
		
		$(".clickDrop").hide();
		$(this).find(".clickDrop").fadeIn();
		
		if(indexs>oldIndexs){
			right();
			//alert(1)
		}
		if(indexs<oldIndexs){
			left();
			//alert(2)
		}
		changeBear();
	})
	//第二轮播


	//业务
	$(".titleBox_centerImg").hover(function(){
		$(this).show().addClass("animated tada");
	},function(){
		$(this).removeClass("animated tada");
	})
	$(".titleBox_rightSwitch").hover(function(){
		$(this).show().addClass("animated tada");
	},function(){
		$(this).removeClass("animated tada");
	})
	
	$(".titleBox_rightSwitch").click(function(){
		var titleBoxSwitch=$(this).css("background-position-y");
		//alert(titleBoxSwitch);
		//alert(typeof(titleBoxSwitch));
		if(titleBoxSwitch=="0%"){
			$(this).css({
				"transition":"all 0.2s",
				"background-position-y":"-67px",
			})
			$(this).parent().next().slideDown();
		}
		if(titleBoxSwitch=="-67px"){
			$(this).css({
				"transition":"all 0.2s",
				"background-position-y":"",
			})
			$(this).parent().next().slideUp();
		}
	})
	$(".titleBox_centerImg").click(function(){
		var titleBoxSwitch=$(this).siblings(".titleBox_rightSwitch").css("background-position-y");
		//alert(titleBoxSwitch);
		//alert(typeof(titleBoxSwitch));
		if(titleBoxSwitch=="0%"){
			$(this).siblings(".titleBox_rightSwitch").css({
				"transition":"all 0.2s",
				"background-position-y":"-67px",
			})
			$(this).parent().next().slideDown();
		}
		if(titleBoxSwitch=="-67px"){
			$(this).siblings(".titleBox_rightSwitch").css({
				"transition":"all 0.2s",
				"background-position-y":"",
			})
			$(this).parent().next().slideUp();
		}
	})
	//业务
	
	
	//横向轮播
	var indexd=0;
	function changeDrop(){
		$(".team_drop a").removeClass("on");
		$(".team_drop a").eq(indexd).addClass("on");
	}
	function doNext(){
		$(".teamMove").animate({
			"left":"-1100px",
		},600,"backIn",function(){
			$(".teamMove_box").eq(0).appendTo(".teamMove");
			$(".teamMove").css("left","0px");
		})
	}
	function doPrev(){
		$(".teamMove_box").eq(2).prependTo(".teamMove");
		$(".teamMove").css("left","-1100px");
		$(".teamMove").animate({
			"left":"0px",
		},600,"backOut")
	}
	$(".team_buttonDown").click(function(){
		if(indexd==2){
			indexd=0;
		}else{
			indexd++;
		};
		changeDrop();
		doNext();
	})
	$(".team_buttonUp").click(function(){
		if(indexd==0){
			indexd=2;
		}else{
			indexd--;
		};
		changeDrop();
		doPrev();
	})
	$(".team_drop a").click(function(){
		var oldIndexd=indexd;
		//alert(oldIndexd)
		indexd=$(this).index();
		//alert(indexd);
		
		$(".team_drop a").removeClass("on");
		$(this).addClass("on");
		
		if(indexd>oldIndexd){
			num = indexd-oldIndexd-0;
			//alert(num)
			switch (num){
				case 1:
					doNext();
					break;
				case 2:
					$(".teamMove_box").eq(0).appendTo(".teamMove");
					//alert(1)
					setTimeout(doNext,1);
					break;
			}
		}
		if(indexd<oldIndexd){
			num = oldIndexd-indexd-0;
			//alert(num)
			switch (num){
				case 1:
					doPrev();
					break;
				case 2:
					doPrev();
					setTimeout(doPrev,1);
					break;
			}
		}
		changeBear();
	})
	$(".usering").hover(function(){
		$(this).find(".usering_mask").fadeIn();
	},function(){
		$(this).find(".usering_mask").fadeOut();
	})
	$(".send_email").hover(function(){
		$(this).css("border-color","#a7a7a7");
	},function(){
		$(this).css("border-color","#e0e1e5");
	})
	$(".team_rightBox div").hover(function(){
		$(this).css("background-color","#168bcb");
	},function(){
		$(this).css("background-color","")
	})
	//横向轮播
	
	
	//联系我们
	var a=true;
	$(".chang").hover(function(){
		if(a==true){
			$(this).css({
				"border-color": "#a7a7a7",
			})
		}
	},function(){
		if(a==true){
			$(this).css({
				"border-color": "#dedfe3",
			})
		}
	})
	$(".chang input").focus(function(){
		a=false;
		$(this).parent().css({
			"border-color": "#a7a7a7",
		})
		//console.log(a);
	}).blur(function(){
		a=true;
		$(".chang").css({
			"border-color": "#dedfe3",
		})
		//console.log(a);
	})
	$(".contact_send").hover(function(){
		$(this).css({
			"background": "#056293",
			"border-color": "#056293",
		})
	},function(){
		$(this).css({
			"background": "#1485C3",
			"border-color": "#2999d6",
		})
	})
	//联系我们
	
	
	
})
