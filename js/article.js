$(function(){
	//引入回顶
	$(".backTopWrap").load("backTop.html");
	//引入回顶
	
	//引入导航页
	$(".navTop").load("header.html");
	//引入导航页
	
	//联系我们
	$('.callme').click(function(){
		$('#callmeWrap').show();
		$('#callmeBox').show();
	})
	$('#close').click(function(){
		$('#callmeWrap').hide();
		$('#callmeBox').hide();
	})
	
	
	//引入导航页
	$(".navBox").hover(function(){
		$(this).find("img").show();
		$(this).find("ul").stop().slideDown(600,"elasticOut");
	},function(){
		$(this).find("img").hide();
		$(this).find("ul").stop().slideUp(100);
	})
	$(".navBox li").hover(function(){
		$(this).stop().animate({
			"padding-left":"20px",
			"width":"150px"
		},300)
		$(this).find("i").show();
	},function(){
		$(this).css("background","");
		$(this).stop().animate({
			"padding-left":"10px",
			"width":"160px"
		},300)
		$(this).find("i").hide();
	})
	//引入导航页
	
	//引入底部
	$(".borderWrap").load("footer.html");
	//引入底部
	
	//pen.hover
	$(".list_pen").hover(function(){
		$(this).animate({"opacity":"1"})
	},function(){
		$(this).animate({"opacity":"0.5"})
	})
	//pen .hover
	
	//pen .click
	$(".list_pen").click(function(){
		$(".title_list").css({
			"width":"0px",
			"background-position-x":"-900px",
		}).animate({
			"width":"780px",
			"background-position-x":"-235px",
		},500)
		
	})
	//pen .click
	
	//喜欢   .hover
	$(".content_likeWrap").hover(function(){
		$(this).addClass("animated rubberBand");
		$(this).css({
			"transition":"all 0.5s",
			"width":"220px",
		});
		
	},function(){
		$(this).removeClass("animated rubberBand");
		$(this).css({
			"transition":"",
			"width":"73px",
		});
		
	})
	//喜欢   .hover
	
	
	var likeTip=["娘娘威武ε=ε=ε=(~￣▽￣)~","喊你点你就点，啰嗦~(￢︿̫̿￢☆)","爱死你啦（*＾-＾*）","再点一下试试(○｀ 3′○)",
				"皇上万岁万岁万万岁(～￣▽￣)～"];
	var num=Math.floor(Math.random()*4);
	//alert(num)
	//alert(likeTip);
	//alert(likeTip[num]);
	
	//喜欢   .click
	$(".likeBtn").click(function(){
		$(".like_tip").text(likeTip[num]);
		$(".like_tip").show().addClass("animated bounceInDown");
		setTimeout(function(){
			$(".like_tip").removeClass("animated bounceInDown");
			$(".like_tip").show().addClass("animated bounceOutLeft");
			
		},2000);
		setTimeout(function(){
			$(".likeBtn").css({
				"transition":"all 0.5s",
				"background-position-y":"-73px",
			})
		},3000)
		$('.move').text("喜欢（21）");
	})
	//喜欢   .click
	
	
	
	$(function(){
		function getUrlParams(name){
			var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
			var r = window.location.search.substr(1).match(reg);
			if(r!=null){
				return  r[2];
			}
			else{
				return "";
			}
		}
		function loadArticleDetail(){ 
			if(getUrlParams("type")){ 
				var result = articleData[getUrlParams("type")+getUrlParams("articleId")]; // 此数据在 articleData.js里  
				$('#name').text(result.data.name); 
				$('#titleName').text(result.data.titleName);
				$('#cover1').attr("src",result.data.coverImg1);
				$('#cover2').attr("src",result.data.coverImg2);
				$('#cover3').attr("src",result.data.coverImg3);
				$('#cover4').attr("src",result.data.coverImg4);
				$('#cover5').attr("src",result.data.coverImg5);
				$('#cover6').attr("src",result.data.coverImg6);
				$('.cover7').attr("src",result.data.coverImg7);
				$('.box3').css("display",result.data.box3);
				$('.box4').css("display",result.data.box4);
				$('.box5').css("display",result.data.box5);
				$('.box6').css("display",result.data.box6);
				$('.box7').css("display",result.data.box7);
				$('#skin1').attr("src",result.data.skin1);
				$('#skin2').attr("src",result.data.skin2);
				$('#skin3').attr("src",result.data.skin3);
				$('#skin4').attr("src",result.data.skin4);
				$('#skin5').attr("src",result.data.skin5);
				$('#skin6').attr("src",result.data.skin6);
				$('#skin7').attr("src",result.data.skin7);
				$('#skinName1').text(result.data.skinName1); 
				$('#skinName2').text(result.data.skinName2); 
				$('#skinName3').text(result.data.skinName3); 
				$('#skinName4').text(result.data.skinName4); 
				$('#skinName5').text(result.data.skinName5); 
				$('#skinName6').text(result.data.skinName6); 
				$('#skinName7').text(result.data.skinName7); 
				$('#storyTitle').text(result.data.storyTitle);
				$('#story').html(result.data.content); 
				$('#dialogueTitle').html(result.data.dialogueTitle);
				$('#dialogue').html(result.data.dialogue);
				$('#Feature').html(result.data.Feature);
				$('#curr').html(result.data.curr); 
				$('.list_pen').css("background-position-y",result.data.sort);
				$('.list_pen').css("display",result.data.sortImg);
				
				$('.curre').css("display",result.data.curre);
				$('#currB').attr("src",result.data.currB);
				$('#currQ').attr("src",result.data.currQ);
				$('#currW').attr("src",result.data.currW);
				$('#currE').attr("src",result.data.currE);
				$('#currR').attr("src",result.data.currR);
				
				$('#currBox').css("display",result.data.display);
				$('.bName').text(result.data.bName);
				$('.qName').text(result.data.qName);
				$('.wName').text(result.data.wName);
				$('.eName').text(result.data.eName);
				$('.rName').text(result.data.rName);
				
				$('.bCd').text(result.data.bCd);
				$('.qCd').text(result.data.qCd);
				$('.wCd').text(result.data.wCd);
				$('.eCd').text(result.data.eCd);
				$('.rCd').text(result.data.rCd);
				
				$('.bMana').text(result.data.bMana);
				$('.qMana').text(result.data.qMana);
				$('.wMana').text(result.data.wMana);
				$('.eMana').text(result.data.eMana);
				$('.rMana').text(result.data.rMana);
				
				$('.bDesc').text(result.data.bDesc);
				$('.qDesc').text(result.data.qDesc);
				$('.wDesc').text(result.data.wDesc);
				$('.eDesc').text(result.data.eDesc);
				$('.rDesc').text(result.data.rDesc);
				
				$('.bTips').text(result.data.bTips);
				$('.qTips').text(result.data.qTips);
				$('.wTips').text(result.data.wTips);
				$('.eTips').text(result.data.eTips);
				$('.rTips').text(result.data.rTips);
			}
		}
		loadArticleDetail();

	})
	
	$('.currb').hover(function(){
		$('.curr').css("background-position-x","-100px");
		$(".skill").hide();
		$(this).css("background-position-x","0");
		$(".b").show();
	})
	$('.currq').hover(function(){
		$('.curr').css("background-position-x","-100px");
		$(".skill").hide();
		$(this).css("background-position-x","0");
		$(".q").show();
	})
	$('.currw').hover(function(){
		$('.curr').css("background-position-x","-100px");
		$(".skill").hide();
		$(this).css("background-position-x","0");
		$(".w").show();
	})
	$('.curre').hover(function(){
		$('.curr').css("background-position-x","-100px");
		$(".skill").hide();
		$(this).css("background-position-x","0");
		$(".e").show();
	})
	$('.currr').hover(function(){
		$('.curr').css("background-position-x","-100px");
		$(".skill").hide();
		$(this).css("background-position-x","0");
		$(".r").show();
	})
	
	var ide = "";
	var oldIde = "";
	$('#skin_box li').hover(function(){
		$('#skin_box li').find("i").removeClass("tip");
		$(this).find("i").addClass("tip");
		ide = $(this).index();
		//alert(ide)
		$(".cover").hide();
		$(".cover").eq(ide).css("display","block");
	})
})
