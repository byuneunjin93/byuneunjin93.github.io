//  sliding_menu_01.js

$(function() {


	$('.menu button').on('click', function(e) {
		e.preventDefault();
		$('aside').toggleClass('active');
		$('#head_box .unb').toggleClass('menu_click_unb_size');
	});
	
	
});