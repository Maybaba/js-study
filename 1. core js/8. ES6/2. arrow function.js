// //함수선언식
// function add (n1, n2) {
//   return n1 + n2;
// }


//익명의 함수를 변수에 선언하는 행위 : 함수표현식

// const add = function(n1, n2) {
//   return n1 + n2;
// };

//화살표 함수 
const add = (n1, n2) => n1 + n2;

const r1 = add(10, 20);
console.log(`r1 : ${r1}`);

const sayHello = () => {
  console.log(`안녕핫세이요`);
  console.log(`두줄일 경우 중괄호 내비두어`);
  return `한줄일때만 return 문 지울 수 있다!`;
};

sayHello();

const kim = {
  name : `kimchelsoo`,
  greeting : sayHello,
  dance: () => console.log(`춤을 신나게 춥니다. `),
};

kim.dance();
kim.greeting();

//정수 1개를 전달하면 해당 정수의 제곱값을 리턴하는 화살표함수 pow 작성



const pow = n => n ** 2; //param 1개일경우에만 소괄호 생략 가능 그외는 써야한다.
console.log(pow(3));