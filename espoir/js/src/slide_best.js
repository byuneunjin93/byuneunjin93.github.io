//slide_best.js

$(function() {
	var best_item =[
		{"img": "img/main/mob/best/best_item_01.jpg","name": "에스쁘아 립스틱 노웨어 M","price":"19,000원"},
		{"img": "img/main/mob/best/best_item_02.jpg","name": "에스쁘아 아이섀도우 익스클루시브","price":"15,000원"},
		{"img": "img/main/mob/best/best_item_03.jpg","name": "에스쁘아 젠틀 아우라 아이섀도우 익스클루시브","price":"15,000원"},
		{"img": "img/main/mob/best/best_item_04.jpg","name": "에스쁘아 프로 테일러 리퀴드 파운데이션 EX SPF 25PA++","price":"38,000원"},
		{"img": "img/main/mob/best/best_item_05.jpg","name": "에스쁘아 아이섀도우 시퀸","price":"10,000"}
		
		];

//item 생성
	var i = 0;
	var j = 0;
	var item_box = $('#item')
	
	item_box.append('<div>');
	
	
	for(; i < best_item.length ; i++){   
		
		item_box.children().append('<ul>');
		
	}
	
	for(; j <3 ; j++){
		
		item_box.children().children().append('<li>');
		
	}
		
//리스트 넣기 
	for(i=0; i < best_item.length ;i++ ){
	item_box.find('div>ul').eq(i).children('li:first-child').css({backgroundImage:'url('+best_item[i].img+')'});
	item_box.find('div>ul').eq(i).children('li:nth-child(2)').text(best_item[i].name);
	item_box.find('div>ul').eq(i).children('li:last-child').text(best_item[i].price);
}

	
	
	
//	
//	var item = $('#item');
//		wrap.prepend('.div_01');
//		$('')
//	
//	
//		wrap.prepend('div_01');
//		wrap.find('h1>a').attr({href:'index.html'}).text('webpage');
//		wrap.children( $('header').append('<nav>') );
//
//// header>nav내용에 페이지 링크 생성
//		var head_nav = $('nav');
//		head_nav.append('<ul>');
//		for(var i = 0; i < headLink.length; i++ ){
//			// console.log(i + "번째 내용: " + headLink[i].link);
//			head_nav.children('ul').append('<li><a>');
//			head_nav.find('li')
//			        .eq(i)
//			        .find('a')
//			        .attr({href:headLink[i].link})
//			        .text(headLink[i].name)
//			.css({})
//		}
});
