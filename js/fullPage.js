$(function(){
	    $('#fullpage').fullpage({
	    	//1.控制颜色的数组
	    	sectionsColor:['#221236','white','#221236','white'],
	    	
	    	//2.是否显示滚按钮,默认为true,表示显示
		 	controlArrows:false,
		 	
		 	//3.是否居中显示，默认为true,表示居中显示
		 	verticalCentered:false,
		 	
		 	//4.滚动速度,默认700
		 	//scrollingSpeed:200,
		 	
		 	//5.锚链接
		 	anchors:['page1','page2','page3','page4'],
		 	
		 	//6.active类
		 	
		 	//屏幕滚动到最顶端或者最底端是否允许循环
		 	//loopTop:true,
		 	//loopBottom:true,
		 	
		 	paddingTop:'50px',
		 	//paddingBottom:'80px',
		 	
		 	//锚链接跳转时是否显示滚动动画,默认为true
		 	//animateAnchor:true,
		 	
		 	//绑定菜单,要配合anchors一起用
		 	//menu:".nav",
		 	
//		 	navigation:true,
//		 	navigationPosition:'right',
//		 	navigationTooltips:['首页','产品列表','个人中心','联系我们'],

            //纵向导航小按钮的设置
//		 	slidesNavigation:true,
//		 	slidesNavPosition:'bottom'

            afterLoad:function(anchor,index){
            	//alert("当前的锚点"+anchor+",当前index值"+index);
            }
		 	
	    });
	    
	    //$.fn.fullpage.setAllowScrolling(false,'down');
	    
	    //销毁fullpage特效
		//$.fn.fullpage.destroy();
	    
	});
