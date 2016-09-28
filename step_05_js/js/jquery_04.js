$(function(){
	var pa=$('p')
	$('.show').on('click',function(){
		pa.show();
	})
	$('.hide').on('click',function(){
		pa.hide();
	})
	$('.toggle').on('click',function(){
		pa.stop().slideToggle();
	})
	
})