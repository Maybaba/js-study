// console.log("다자와님 안녕하세요! 히사시부리");
// console.log("happy day! ");

// // 코드 500줄 정도 작성

// console.log("박영희님 안녕하세요! 히사시부리");
// console.log("happy day! ");

// // 코드 200줄 정도 작성

// console.log("신윤종님 안녕하세요! 히사시부리 ");
// console.log("happy day! ");


//함수를 만든다! (정의한다) : define function fx = 2x;
//코드의 재사용성, 모듈화 
function sayHello(userName) {
  console.log(`${userName}님 안녕하세요!오늘은 먹고싶은게 없다`);
  console.log(`happy day!`);
}
//함수의 호출! (사용한다.) : call function
sayHello('바보');

console.log('========================');

sayHello('바바');

console.log('========================');

function makeLine () {
  console.log('========================');
}
sayHello('a');
makeLine () ;
sayHello('b');
makeLine () ;
sayHello('c');
makeLine () ;

//원의 넓이를 자주 구한다. 
const PI = 3.14159265;

//r = 5 
var circle1 = PI * 5 ** 2;
console.log(circle1);

// 반지름이 r 인 원의 넓이를 구하는 함수 정의
function clacAreaCircle(r) {
  return PI * r ** 2;
}

console.log(clacAreaCircle(3)); //함수 호출

//게시글을 삭제하는 함수
function removeBoardArticle() {}

