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
	
	//pen.hover
	$(".list_pen").hover(function(){
		$(this).css("background-position-x","-61px");
	},function(){
		$(this).css("background-position-x","");
	})
	$(".list_pen").click(function(){
		$(".title_list").css({
			"width":"100px",
			"background-position-x":"-900px",
		}).animate({
			"width":"1100px",
			"background-position-x":"0px",
		},500)
		
	})
	//pen .hover
	
	
	
	
	
	var pageStart;
    var pageCount;
	
	//获取页面url传过来的参数
	function getUrlParams(name){
		 var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		 var r = window.location.search.substr(1).match(reg);
		 
		 if(r!=null)
			 return  r[2];
		 else 
			 return "";
	}

	//加载列表数据方法
	function loadArticleList(){
		//先ajax请求数据，然后就行下面的操作，此处数据先写好在了listData.js里，可以直接使用，格式和服务器返回的json一致。
		if(!pageStart){
			$("#articleList").html("");
			pageStart = 0;
		}	
		var itemHtml = '';
		if (pageStart>=10){
			var result = listData["listData" +pageStart]; 
		}else{
			var result = listData["listData0" +pageStart];
		}
		
		
		 //此数据在listData.js里
		var list = result.data.list;
		if(!list || !list.length){
			$("#articleList").html("暂时没有内容，敬请期待！");
		} else {
			var updateTime;
			for(var i=0; i < list.length; i++){
				updateTime = list[i].titleName;
				itemHtml = $("#itemHtml").html().replace("$articleCover$", list[i].coverImg)
						.replace("$articleId$", list[i].sysId)
						.replace("$articleTitle$", list[i].name)
						.replace("$updateTime$", updateTime ? updateTime.substr(0, 10) : "")
						.replace("$describe$", list[i].describe);
				$("#articleList").append(itemHtml);
			} 
		}
		//用于加载下一页时使用
		pageStart = result.data.pageStart + 1;
		pageCount = Math.ceil(result.data.count/result.data.pageSize);
		if(pageStart >pageCount){
			$("#listMore").css({
				"opacity":"0",
				"cursor":"default"
			}).prev("img").attr("src","images/list_gomore_bg_nomore.jpg");
		}
	}
	
	

	$(".title_list .pen").click(function(){
		$(".title_list").animate({"width":"100px",backgroundPositionX:"-1000px"},0,function(){
			$(".title_list").animate({"width":"1100px",backgroundPositionX:"0px"},1300,"easeOutStrong");
		});
	})
	
	//刚进入页面，调用数据加载方法，加载第一页数据
	loadArticleList();
	
	//点击下一页，加载对应页面数据
	$("#listMore").click(function(){
		if(pageStart <= pageCount){
			loadArticleList();
		}	
	})
	//由于.content_one是后来添加到页面的dom，直接绑定click事件是不起作用的，这里我们采用事件委托的方式，把事件委托到$("#articleList")上
	$("#articleList").delegate(".content_one", "click", function(){
		window.open("article.html?"+"type=" + "hero"+ "&articleId=" + $(this).attr("articleId"), "_blank");
	});
})





