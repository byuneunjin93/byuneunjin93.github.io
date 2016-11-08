$(function(){
	
	$('.btn>button').on('click',function(){
		
	
		$('aside').toggleClass('active');
	});
	
	$('#tab_menu').tabs();
	
	var win_height=$(window).height();
	var h1_height=$('h1').height();
	var h1_padding=parseInt($('h1').css('paddingTop'))+parseInt($('h1').css('paddingBottom'));
	 
	var section_height=win_height-(h1_height + h1_padding);
	
	$('section').height(section_height);
	console.log(win_height);
	console.log(h1_height);
	console.log(h1_padding);
	console.log(section_height);
	
});