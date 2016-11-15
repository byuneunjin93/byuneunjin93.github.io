// addBanner.js

$(function() {

var left = $('.leftBtn');
var right = $('.rightBtn');
var box = $('#videoBox>ul');

left.on('click',function() {
	
	box.find('li:last').prependTo(box);
	
});
	
right.on('click',function() {
	
	box.find('li:first').appendTo(box);
	
});

});

