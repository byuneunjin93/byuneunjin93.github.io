

$(function() {

// slideVideo.js
	
var left = $('.leftBtn');
var right = $('.rightBtn');
var box = $('#videoBox>ul');


left.on('click',function() {
	
	box.find('li:last').prependTo(box);
	
	box.find('iframe').remove();
	
	var class_name = box.children().attr('class');
	var slice_name = class_name.slice(7,8);
	console.log(class_name);
	console.log(slice_name);
	var addRed = parseInt(slice_name) - 4;
	var removeRed = addRed + 1;
	console.log(removeRed);
	console.log(addRed);
	
	nav.find('li').eq(removeRed).css({backgroundColor:'#fff'});
	nav.find('li').eq(3).css({backgroundColor:'#fff'});
	nav.find('li').eq(addRed).css({backgroundColor:'#c22'});
});
	
	
right.on('click',function() {
	
	box.find('li:first').appendTo(box);
	box.find('iframe').remove();
	
	var class_name = box.children().attr('class');
	var slice_name = class_name.slice(7,8);
	console.log(class_name);
	console.log(slice_name);
	var addRed = parseInt(slice_name) - 4;
	var removeRed = addRed - 1;
	console.log(removeRed);
	console.log(addRed);
	
	nav.find('li').eq(removeRed).css({backgroundColor:'#fff'});
	nav.find('li').eq(3).css({backgroundColor:'#fff'});
	nav.find('li').eq(addRed).css({backgroundColor:'#c22'});
});

	
// playVideo.js	
	
var playBtn = $('.play>button');

var video_li = $('#videoBox li'); 	
var nav = $('#videoNav');
	
var video_list=[
	
	{"link":"https://www.youtube.com/embed/StzfQEruOyw?html5ui=1&autoplay=true"},
	{"link":"https://www.youtube.com/embed/Z5zkaiOrMPo?html5ui=1&autoplay=true"},
	{"link":"https://www.youtube.com/embed/LtsG5eAZj0c?html5ui=1&autoplay=true"},
	{"link":"https://www.youtube.com/embed/Mt1FwK5SUxM?html5ui=1&autoplay=true"},
	{"link":"https://www.youtube.com/embed/T7LPuTdH3Og?html5ui=1&autoplay=true"},
	{"link":"https://www.youtube.com/embed/pvu7Y91xUKM?html5ui=1&autoplay=true"},
	{"link":"https://www.youtube.com/embed/eTIARMUA-qo?html5ui=1&autoplay=true"},
	
	
];
	
playBtn.on('click',function(e) {
	
	e.preventDefault();
	var class_name = $(this).parent().parent().attr('class');
	var slice_name = class_name.slice(7,8);
	console.log(class_name);
	console.log(slice_name);
	
	
//	
		
	$(this).parent().parent().prepend('<iframe>');
	
	$(this).parent().parent().find('iframe').attr({'src':video_list[slice_name].link});
		
	
});
	


	
	
});

//<iframe width="640" height="360" src="https://www.youtube.com/embed/Z5zkaiOrMPo" frameborder="0" allowfullscreen></iframe>
//<iframe width="640" height="360" src="https://www.youtube.com/embed/LtsG5eAZj0c" frameborder="0" allowfullscreen></iframe>
//<iframe width="640" height="360" src="https://www.youtube.com/embed/Mt1FwK5SUxM" frameborder="0" allowfullscreen></iframe>
//<iframe width="640" height="360" src="https://www.youtube.com/embed/T7LPuTdH3Og" frameborder="0" allowfullscreen></iframe>
//<iframe width="640" height="360" src="https://www.youtube.com/embed/pvu7Y91xUKM" frameborder="0" allowfullscreen></iframe>
//<iframe width="640" height="360" src="https://www.youtube.com/embed/eTIARMUA-qo" frameborder="0" allowfullscreen></iframe>