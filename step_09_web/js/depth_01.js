$(function(){
	
	$('#depth1>ul>li>a').on('mouseenter',function(){
		$('#depth1').find('ol').slideUp();
		
		$(this).next().stop().slideDown();
	});
	
	$('#depth1').on('mouseleave',function(){
		
		$(this).find('ol').stop().slideUp();
	});
	
});