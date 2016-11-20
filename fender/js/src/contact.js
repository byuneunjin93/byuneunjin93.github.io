$(function(){
  
  
var map = $('#contact .map');
    
    map.find('circle').attr({opacity:'0.5'});
    map.find('path').attr({opacity:'0.5'});
    
    
    
    map.find('.btn').on('click',function(){
        
        var btn = $(this).attr('id');
        
        console.log(btn);
        
        map.find('dt').fadeOut();
        map.find('dd').fadeOut();
        switch (btn){
            case "headquarter_btn" :
                
                map.find('.headquarter').fadeIn(100);
                
                break;
            case "uk_btn" :
                map.find('.uk').fadeIn(300);
                map.find('.eastern').fadeIn(300);
                break;
            case "fr_btn" :
                map.find('.fr').fadeIn(300);
                break;
            case "sppt_btn" :
                map.find('.sppt').fadeIn(300);
                break;
            case "sca_btn" :
                map.find('.sca').fadeIn(300);
                break;
            case "ger_btn" :
                map.find('.ger').fadeIn(300);
                break;
            default : 
                
        }
            
        
    });
    
    map.find('dt').on('click',function(){
        $(this).next().slideToggle().sli;
        });
   map.find('')
    
    
    
    
    
    
    
    
///*마우스 위치 구하기*/    
//$(window).mousemove(function(e){
//    
//console.log("pageX : "+e.pageX);
//console.log("pageY : "+e.pageY);
//
//});
//  
//  
//  
  });