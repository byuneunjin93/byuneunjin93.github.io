//  sliding_menu_01.js

$(function() {

var shop = [
			{"dt" :"SHOP"},
			{"dt" : "베스트 신제품"},
			{"dt" : "스킨 케어", "skincare":[
										{"dd":"클렌저"},
										{"dd":"데일리케어"},
										{"dd":"엑스트라케어"},
										{"dd":"선케어"}]      },
  
			{"dt" : "페이스 메이크업" , "facemakeup":[
										{"dd":"프라이머"},
										{"dd":"루미나이저"},
										{"dd":"BB 틴티드"},
										{"dd":"컨실러"},
										{"dd":"파운데이션"},
										{"dd":"파우더"}]      },
			{"dt" : "아이" , "eye":[
										{"dd":"아이섀도우"},
										{"dd":"아이라이너"},
										{"dd":"아이브라우"},
										{"dd":"마스카라"},
										{"dd":"아이 기타"}]   },
			{"dt" : "치크"},
			{"dt" : "립" , "lip":[
									{"dd":"립스틱"},
									{"dd":"립글로즈"},
									{"dd":"립틴트"},
									{"dd":"립라이너"},
									{"dd":"립 기타"}]   },
			{"dt" : "향수"},
			{"dt" : "프로 툴"},
			{"dt" : "스페셜 세트"},
			{"dt" : "아이 믹스앤매치"},
			{"dt" : "라스트찬스"}
		   ];
var protip = [
			{"dt" : "PRO TIP"},
			{"dt" : "에브리데이 메이크업"},
			{"dt" : "프로메이크업 비디오"},
			{"dt" : "아티스트 QNA"},
			{"dt" : "파운데이션 파인더"},
			{"dt" : "컬러 파인더"},
			{"dt" : "브러쉬 파인더"}
			];
var chance = [
			{"dt" : "CHANCE"},
			{"dt" : "이벤트"},
			{"dt" : "큐빅스토어"}
			];
var service =[
			{"dt" : "SERVICE"},
			{"dt" : "메이크업 레슨"},
			{"dt" : "멤버쉽"},
			{"dt" : "VVIP라운지"},
			{"dt" : "아이브로우바"}
			];
var brand = [
			{"dt" : "BRAND"},
			{"dt" : "뉴 컬렉션"},
			{"dt" : "브랜드 컨셉"},
			{"dt" : "브랜드 히스토리"},
			{"dt" : "아티스트 스튜디오"},
			{"dt" : "뉴스"},
			{"dt" : "소셜 에스쁘아"},
			{"dt" : "매장찾기"}
			];

	

var ww = $(window).width();
var unb = $('.unb');
var menu = $('.slide_menu');
	
	/*메뉴버튼 누르면 slide_menu가 왼쪽에서부터 슬라이드*/
	
	$('.menu button').on('click', function(e) {
				e.preventDefault();
				$('.cancle_area').toggleClass('height');
                menu.toggleClass('active');
				$('#head_box .unb').toggleClass('menu_click_unb_size');
				
				menu.find('.menu_area dl').animate({left:"21.88rem"},200,
								                    function(){
                                    menu.find('.menu').prependTo('.unb');
					                menu.find('.menu_area dl').remove();
				});
    });
    
    /*cancle_area 를 누르면 slide_menu 가 들어감*/
    $('.cancle_area').on('click',function(){
                
        $('.cancle_area').toggleClass('height');
        menu.toggleClass('active');
        $('#head_box .unb').toggleClass('menu_click_unb_size');
        menu.find('.menu').prependTo('.unb');
        menu.find('.menu_area dl').remove();
        unb.find('.menu i').attr({class:"fa fa-bars"});
        menu.find('.menu_area dt').eq(0).animate({left:"-21.88rem"},200);
	        if(1023< ww){
            unb.find('h1').show();
        }else{}
	                
           
    });
    
    /*만약 PC일경우에는 my와 cart가 slide_menu로 이동*/
	if(1023 < ww){
		unb.find('.my').prependTo('.slide_menu').find('span').removeClass('hidden');
		unb.find('.cart').prependTo('.slide_menu').find('span').removeClass('hidden');
		
	}else{
		
	}
	
		
	menu.find('li').on('click', function() {
		
		if(1023< ww){unb.find('h1').hide();}else{}
		
		var click_list = $(this).index(); /*클릭한 li의 인덱스를 가져온다*/
		menu.children('.menu_area').append('<dl>'); /*dl생성*/
        
        var dl = $('.slide_menu').find('dl');
        
		switch (click_list){
          
			case 0 :
				for(i=0;i<shop.length;i++){
				dl.append('<dt><a href="#">');/*dt생성*/
                var dt = $('.slide_menu').find('dt');
				
				dt.eq(i).find('a').text(shop[i].dt);}
				
				dt.eq(0).text(shop[0].dt);
				
                dl_move(); /*0번째 li 클릭시 dl 이동 함수 */
				
				dt.eq(2).after('<dd>');
				dt.eq(3).after('<dd>');
				dt.eq(4).after('<dd>');
				dt.eq(6).after('<dd>');
				
                var dd = $('.slide_menu').find('dd');
				/*dd가 있는 곳 바로 이전 dt에 역할과 아이콘 추가*/
				menu.find('dd').prev().children().attr({roll:"button"}).append('<i class="fa fa-angle-down" aria-hidden="true"></i>');
				
					
				for(i=0;i<shop[2].skincare.length;i++){
					dd.eq(0).append('<div><a href="#">');
				    dd.eq(0).find('a').eq(i).text(shop[2].skincare[i].dd);
				}
				
				for(i=0;i<shop[3].facemakeup.length;i++){
				    dd.eq(1).append('<div><a href="#">');
					dd.eq(1).find('a').eq(i).text(shop[3].facemakeup[i].dd);
				}
				for(i=0;i<shop[4].eye.length;i++){
					dd.eq(2).append('<div><a href="#">');
					dd.eq(2).find('a').eq(i).text(shop[4].eye[i].dd);
				}
				for(i=0;i<shop[6].lip.length;i++){
					dd.eq(3).append('<div><a href="#">');
					dd.eq(3).find('a').eq(i).text(shop[6].lip[i].dd);
				}
				
				menu.find('[roll="button"]').on('click',function(){
                   var click_dt = $(this).parent();   
					$(this).parent().next().stop().slideToggle();
                    $(this).find('i').toggleClass('fa-angle-down').toggleClass('fa-angle-up');
                    dd.not(click_dt.next()).stop().slideUp(); /*누른 dt의 dd를 제외한 dd를 슬라이드업*/
                    dd.prev().not(click_dt).find('i').removeClass('fa-angle-up').addClass('fa-angle-down'); /*dt중 클릭한 dt를 제외하고는 다운아이콘으로 변경*/
                    });
				
              break;
				
            case 1 :
              for(i=0;i<protip.length;i++){
				dl.append('<dt><a href="#">');/*dt생성*/
				var dt = $('.slide_menu').find('dt');
				
				dt.eq(i).find('a').text(protip[i].dt);}/*list넣기*/
                dt.eq(0).text(protip[0].dt);
				dl_move();
              break;
            case 2 :
              for(i=0;i<chance.length;i++){
				dl.append('<dt><a href="#">');/*dt생성*/
                var dt = $('.slide_menu').find('dt');
				
                dt.eq(i).find('a').text(chance[i].dt);}	/*list넣기*/
				dt.eq(0).text(chance[0].dt);;
				dl_move();
              break;
            case 3 :
              for(i=0;i<service.length;i++){
				dl.append('<dt><a href="#">');/*dt생성*/
                var dt = $('.slide_menu').find('dt');
                  
				dt.eq(i).find('a').text(service[i].dt);}	/*list넣기*/
				dt.eq(0).text(service[0].dt);;
				dl_move();
             break;
			
			case 4 :
                dl.remove();
			if(1023< ww){unb.find('h1').show();}else{}
			break;
			
        	case 5 :
				for(i=0;i<brand.length;i++){
				dl.append('<dt><a href="#">');/*dt생성*/
                var dt = $('.slide_menu').find('dt');
				
                dt.eq(i).find('a').text(brand[i].dt);}	/*list넣기*/
				dt.eq(0).text(brand[0].dt);;
				dl_move();
              break; 
		}
            dt.eq(0).remove('a');
		
		/*dl 왼쪽에서 나타나게 하기 함수 dl_move*/
		
		function dl_move (){
			menu.find('dt').eq(0).prepend('<button class="prev" type="button"><i class="fa fa-angle-left" aria-hiddeen="true">');  /*dt:first에 뒤로가기 버튼 만들기*/
			unb.find('.menu').appendTo('.unb .slide_menu dt:first'); /*메뉴버튼 dt:first로 이동*/
			menu.find('.menu i').attr({class:"flaticon-close"});/*메뉴버튼 아이콘 바꾸기*/
			menu.find('.menu_area dl').animate({left:0},300);
			
        /*이전버튼 누를시*/
			menu.find('dt .prev').on('click',function(){
				menu.find('.menu i').attr({class:"fa fa-bars"});/*메뉴아이콘 원상복귀*/
				menu.find('.menu').prependTo('.unb'); /*메뉴 위치 원상복귀*/
				menu.find('.menu_area dt').eq(0).css({display:"none"});/*fixed 처리된 dt첫번째 숨김처리*/
				menu.find('.menu_area dl').animate({left:"21.88rem"},200,
												   function(){
													$(this).remove();/*dl이동후 제거*/
				if(1023< ww){
					unb.find('h1').show();/*PC일경우 로고 원상봉귀*/
				}else{}
				});
			});
			
        /*닫기버튼 누를시*/
			$('.menu button').on('click', function() {	
				menu.find('.menu i').attr({class:"fa fa-bars"});/*메뉴아이콘 원상복귀*/
				menu.find('.menu').prependTo('.unb'); /*메뉴 위치 원상복귀*/
				menu.find('.menu_area dt').eq(0).css({display:"none"});
                /*fixed 처리된 dt첫번째 숨김처리*/
				
				menu.find('.menu_area dl').animate({left:"21.88rem"},200,
												   function(){
													$(this).remove();	/*dl이동후 제거*/
					
				});
				if(1023< ww){
					unb.find('h1').show();/*PC일경우 로고 원상봉귀*/
				}else{}
			});
        };
	});
    
    $(window).resize(function(){
		
	location.reload(); 
	
	});
    
});