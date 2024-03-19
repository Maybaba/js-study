
// '=' 우항에 있는 값을 좌항에 있는 공간에 저장한다
var result; // 변수 선언 

result = 10 + 20; //값을 변수에 할당 (대입)

var multiple = result * 3 //90
console.log(multiple);

var fruit; // declare
fruit = '자몽';  //initialize
console.log(fruit) ;

var food = '보끔밥'; // declare & initialize
food = '돈까스'; // reset
console.log(food); 

//변수이름규칙
// var 7number; //숫자 맨앞 안됨
// var num7ber;
// var curruntLoginUserPhonNumber; // 띄어쓰기안되니까 camelCase 쓰세요 -->js
// var currunt_login_user_phonNumber; // 띄어쓰기안되니까 snake_case 쓰세요 --> python, SQL
// var APPLE;
// var apple;
// var AppLe; //대소문자구분가능
// var myPetName!; //허용되는 특문은 $ _ 이 두개 뿐..
// var $myPetName_;
// var for; //식별자, 예약어로는 이름으로 사용할 수 없다... 
// var For;
// var Var;
// var Let;
// var let;
// var if;
// var else;

var 바보 = 'こち';
console.log(바보);

//변수 이름은 일관성있게 정리해놔야 언제든지 코드 확인할 떄 편하다 : ) 

var myMoney = 1000;

//재할당 불가한 const
const $orange = '#ffa808';
$orange = 'dfdfsfsf';
console.log($orange);

// 보통 상수는 아래와 같이 이름관례를 따른다고 한다.
const COLOR_RED = "#F00";