$(function() {

	
var left = $('.leftBtn');
var right = $('.rightBtn');
var box = $('#videoBox>ul');

var playBtn = $('.play>button');
var video_li = $('#videoBox li'); 	
var nav = $('#videoNav');


nav.find('li').eq(0).css({backgroundColor:'#c22'});
	
// slideVideo.js
	
left.on('click',function() {
	
	
	var class_name = box.find('li:first').attr('class');
	var slice_name = class_name.slice(7,8);
	var addRed = parseInt(slice_name)-1;
    if(addRed === -1){addRed = 6;}

	box.find('li:last').prependTo(box);
	nav.children('li:first').appendTo(nav);
	
	
	box.find('iframe').remove();
	
	nav.find('li').css({backgroundColor:'#fff'});
	nav.find('li').eq(addRed).css({backgroundColor:'#c22'});
});

	
right.on('click',function() {
	
	var class_name = box.find('li:first').attr('class');
	var slice_name = class_name.slice(7,8);
	var addRed = parseInt(slice_name)+1;
	if(addRed === 7){addRed = 0;}
	
	
	
	
	box.find('li:first').appendTo(box);
	nav.children('li:first').appendTo(nav);
	box.find('iframe').remove();
	
	nav.children('li').css({backgroundColor:'#fff'});
	nav.find('li').eq(addRed).css({backgroundColor:'#c22'});
	

});
	
	
	
	nav.find('li').on('click',function(){
		nav.children('li').css({backgroundColor:'#fff'});
		
		
		var class_name = nav.find('li:first').attr('class');
		var slice_name = class_name.slice(5,6);
		var addRed = parseInt(slice_name);
		console.log("click_addRed: "+addRed);
		
//		if(addRed === -1){addRed = 0;}
		
		var li_clicknum = $(this).index();				
		
//		
		if(addRed<li_clicknum){
			
			for(addRed;addRed<li_clicknum;addRed++){
				box.find('li:first').appendTo(box);
				nav.children('li:first').appendTo(nav);
				console.log("for문 실행:"+addRed);
				}
				nav.find('li').eq(li_clicknum).css({backgroundColor:'#c22'});
		
		}else{
			for(addRed;li_clicknum<addRed;addRed--){
				box.find('li:last').prependTo(box);
				nav.children('li:last').prependTo(nav);
				console.log("for문 실행:"+addRed);
				}		
				nav.find('li').eq(li_clicknum).css({backgroundColor:'#c22'});
			
		}
		
		
	
	
	});
	
	
//favorite = "disneyland";
//switch (favorite){
//  case nav.find('li').eq(1)  :
//  
//		for(li_orinum;li_orinum<li_num;li_orinum++){
//					box.find('li:first').appendTo(box);}
//		
//  break;
//  case  :
//  document.write("I Love disneyland");
//  break;
//  case  :
//  document.write("I Love robot");
//  break;
//  case  :
//  document.write("I Love ipad");
//  break;
//  case  :
//  document.write("I Love apple");
//  break;
//  case  :
//  document.write("I Love macbook");
//  break;
//  default : 
//  document.write("nothing");
//}
//	
	
//	var li_orinum =$(this).index()+1;
//			console.log("li_orinum:"+li_orinum);
//
//			nav.find('li').on('click',function(){
//				var li_num = $(this).index();
//				console.log("li_num:"+li_num);
//
//				for(li_orinum;li_orinum<li_num;li_orinum++){
//
//					box.find('li:first').appendTo(box);
//					}
//				
//				
//				nav.find('li_num').css({backgroundColor:'#fff'});
//				$(this).css({backgroundColor:'#c22'});
//
//		   });


// playVideo.js	
	
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
