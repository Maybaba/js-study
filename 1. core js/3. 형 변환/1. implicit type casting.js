var n1 = 10;
var n2 = `20`;

console.log(n1 + n2);

var n3 = n1 + '';
console.log(typeof n3);

var n4 = n2 - n1 - 5 - '3';
console.log(n4);

var n5 = n1 * n2;
console.log(n5);

var n7 = n2 * n1;
console.log(n7);

//자바스크립트만의 특수한 문법으로 , 타입변환이 자유롭다. 

var n6 = 'hello' * 3;
console.log(n6);

console.log('===================================');

var n8 = +`99`;
console.log(true + true); // 논리값을 숫자로 자동 변환한다. 
console.log(true + false); 
console.log(false + false);

console.log('==================================');

//falsy 한 값
if (0) console.log('hello-1');
if ('') console.log('hello-2');
if (null) console.log('hello-3');
if (undefined) console.log('hello-4');
if (NaN) console.log('hello-5');

if (99) console.log('hello-6');
if (-88.888) console.log('hello-7');
if (`멝옹`) console.log('hello-8');
if (` `) console.log('hello-9');
if ([10, 20, 30]) console.log('hello-10');
if ([]) console.log('hello-11');
if ({ kind : '개' }) console.log('hello-12');
if (function() {}) console.log('hello-13');

/* false 한 값이 조건문으로 들어왔을때 false 이면 조건을 통과해서 출력되어야 하는게 아ㅣ닐까?
그리고 왜 99 d이런 t값이 ... 출력이 잘 된느거지? 이게 형변환인겨???? */

for (var i = 1; i < 10; i++) {
  if (i % 2 === 0) { // if (i % 2)
    console.log(`${i}는 홀수입니다.`); //홀수일때는 if (1)
  } else {
    console.log(`${i}는 짝수입니다. `); //짝수일때는 if (0)
  }
}

console.log ('==========================');

var apple = 0;
if (apple > 0) { // if (apple)
  console.log(`사과가 있습니다. `);
} else {
  console.log(`사과가 없습니다. `);
}

var flag = n > 10;

if (flag === true) { //if (flag)  false 를 if (!flag)로 표현 가능하다. 

}

