// addBanner.js

$(function() {

var left = $('.l_btn');
var right = $('.r_btn');
var box = $('.video>ul');

left.on('click',function() {
	
	box.find('li:last').prependTo(box);
	
});
	
right.on('click',function() {
	
	box.find('li:first').appendTo(box);
	
});

});

