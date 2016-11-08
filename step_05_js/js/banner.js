(function($){
	
	var left = $('.l_btn');
	var right = $('.r_btn');
	var box = $('.bannerBox>ul');
	
	left.on('click',function(){
		box.stop().animate({marginLeft:0},500);
	});
	right.on('click',function(){
		box.stop().animate({marginLeft:-200+'%'},500);
	});
	
	
	
})(this.jQuery);