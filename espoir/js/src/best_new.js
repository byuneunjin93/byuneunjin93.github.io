var bn = $('#best_new');

bn.find('.lnb_big_01 button').on('click',function(){
    
    bn.find('.info').css({backgroundImage:'url(./img/bestNnew/bg_adv_best.jpg)'});
    bn.find('.info h2').text('BEST SELLERS');
    bn.find('.info p').html('꾸준히 사랑받는 에스쁘아 베스트 셀러');
    
    bn.find('.lnb_big_02').css({backgroundColor:'#333'});
    $(this).parent().css({backgroundColor:'#111'});
});
bn.find('.lnb_big_02 button').on('click',function(){
    
    bn.find('.info').css({backgroundImage:'url(./img/bestNnew/bg_adv_new.jpg)'});
    bn.find('.info h2').text('NEW PRODUCTS');
    bn.find('.info p').html("새롭게 출시된 에스쁘아의 핫 아이템");
    bn.find('.lnb_big_01').css({backgroundColor:'#333'});
    $(this).parent().css({backgroundColor:'#111'});
});
