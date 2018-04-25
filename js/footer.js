$(function(){
	//音乐
	$(".footer_music div").click(function(){
		$("audio").remove();
		$("<audio src='music/sound0"+$(this).index()+".mp3' controls='controls' autoplay='autoply' style='display: none;'></audio>").appendTo(this);
	})
	
	
	$(".footer_music div").hover(function(){
		$(this).css("background-position-y","-57px")
		$(this).addClass("animated rubberBand");
	},function(){
		$(this).css("background-position-y","0px")
		$(this).removeClass("animated rubberBand");
	})
	$(".footer_wenzi a").hover(function(){
		$(this).css("color","deepskyblue");
		
	},function(){
		$(this).css("color","white");
		
	})
	//音乐
})
