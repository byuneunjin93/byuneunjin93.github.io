//function_01.js

//함수:다시 사용할수 있도록 코드를 묶어두는 방법
//여러식을 모아서 쉽게 운용할 수 있도록 만들어 놓은 형식
//계산기
//var ax="test";
////기본함수
//function add(){
//	
//};
//
////익명함수
//var sum = function(){
//	
//};
//
//// 생성자 함수(인스턴스화)
//var plus =new Function(){}; 

//function add(x,y){
//	console.log(x+y);
//};
//
//add(10,100);
//
//var sum = function(x){
//	console.log(x+100);
//};
//
//sum(10);

var fun =function(x){
	var x1,x2;
	x1=x*x;
	return x1;
};
console.log(fun(7));