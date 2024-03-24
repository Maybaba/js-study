
// 스트링에서 \n : 줄바꿈임니돠 

// 1번 양의 정수 입력하면 그 수 전까지 2의 제곱수가 가로로 나오게 하자. 
// var n = +prompt("값을 입력해주세요");
var n = 50; //숫자 입력을 받았을 때  
// var i = 2; //2부터 시작해서 
// console.log(i);
// i *= 2;
// console.log(i);
// i *= 2;
// console.log(i);
// i *= 2;
// console.log(i);
// i *= 2;

var accum = ''; //문자열에 나온 수 가로로 나오게끔하기
for (var i = 2; i <= n; i *= 2) {
  accum += i }
  console.log(accum)
// } alert(i);

/* 선생님코드
제곱수를 누적한 변수
var accum = '';

for (var i = 2; i <= n; i *= 2) {
  accum += `${i} `;
}
alert(accum); 
*/

//2번 정수를 입력하면 정수의 모든 약수를 console.log 로 나오게끔 하자
var targetNum = 10;

/* 슨생님의 방법 
/// 입력받은 숫자의 모든 약수를 출력하고 약수의 개수를 출력하라
var targetNum = 9;

// 약수 카운트를 저장할 변수
var count = 0;

for (var i = 1; i <= targetNum; i++) {
  if (targetNum % i === 0) {
    console.log(i);
    count++;
  }
}
console.log(`약수의 개수: ${count}개`); */

/*
// 입력받은 숫자의 모든 약수를 출력하고 약수의 개수를 출력하라
var targetNum = +prompt('정수: ');

// 약수 카운트를 저장할 변수
var count = 0;

// 출력내용을 저장할 변수
var result = '';

for (var i = 1; i <= targetNum; i++) {
  if (targetNum % i === 0) {
    result += `${i} `;
    count++;
  }
}
result += `약수의 개수: ${count}개`;
alert(result);
*/ 


/**
 * 최종풀이 
 * // 입력받은 숫자의 모든 약수를 출력하고 약수의 개수를 출력하라
var targetNum = +prompt('정수: ');

// 약수 카운트를 저장할 변수
var count = 0;

// 출력내용을 저장할 변수
var result = '';

for (var i = 1; i <= targetNum; i++) {
  if (targetNum % i === 0) {
    result += `${i}\n`;
    count++;
  }
}
result += `약수의 개수: ${count}개`;

alert(result);
 */

