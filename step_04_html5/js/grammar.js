//grammar.js

//javascript문법
//
//조건문(if,삼항연산장,switch)
//반복문(for,while)
//
//if(조건형태){
//	참이면 현재위치가 실행;
//};
//var num=10;
//if(num<11){
//	console.log("변수 num은 11보다 작습니다.");
//}
//
////if(조건형태){
////	조건이 참이면 현재 위치를 실행;
////}else{조건이 거짓이면 현재 위치를 실행;};
//
//
//var num=12;
//if(num<11){
//	console.log("(num:",num,")","변수 num은 11보다 작습니다.");
//}else{console.log("(num:",num,")","변수 num은 11보다 큽니다.");}
//
//if(조건1){
//	조건1이 참이면 실행;} else if(조건2){
//		조건2가 참이면 실행;}else{}

//var subject='math';
//
//if(subject.length<5){
//	console.log("subject의 글자수는 5개보다 작습니다");
//}else if(subject.length>5){
//	console.log("subject의 글자수는 5개보다 큽니다");
//}else{
//	console.log("subject의 글자수는 5개입니다.");
//}
//
//삼항연산자
//(___)?___:___;
//(조건) ? 참이면 실행:거짓이면실행 ;
//
//switch(조건){
//	case 조건결과1:
//		조건결과1이 맞을경우 실행;
//		break;
//	case 조건결과2:
//		조건결과2이 맞을경우 실행;
//		break;
//	default:
//		조건이 부합되지 않는경우 실행;
//}
//
//
//}

//[버튼을 누르면 .view를 사라지게 만들기]
//$('선택자').on('이벤트')
//click,dblclick,wheel,mouseenter,mouseleave,scroll

//-------------클릭하면 function작동 

$(function(){
$('button').on('click',function(){
	$('.view').hide();
})

});






