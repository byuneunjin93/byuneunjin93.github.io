$(function(){
	
//	var accoV = $('#accodionV');
//	accoV.find('dt').on('click',function(){
//		accoV.find('dd').stop().slideUp();
//		$(this).next('dd').stop().slideDown();
//		
//	});
	
//	가로형
	
	
	var accoH = $('#accodionH');
	accoH.find('dt').on('mouseenter',function(){
		accoH.find('dd').stop().animate({width:0},300);
		$(this).next('dd').stop().animate({width:50+'%'},500);
	});
	
	
	
});