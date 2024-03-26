/* 
Q. n의 약수의 개수를 구하기
1. 정수 n을 전달받아 n의 약수들을 출력하고 
약수의 개수를 리턴하는 함수 calcDivisor를 정의하세요.
2. 약수의 출력은 함수 내부에서 이뤄져야 합니다.
3. 힌트) 전달받은 n을 1부터 n까지 지속적으로 나누어
 나누어 떨어졌을 시 약수의 개수 카운트를 1증가시키고 출력.
*/
// 개수는 전체적으로 구하되, 약수 보이는 것만 절반으로 보이게끔 하는거야?
function calcDivisor(n) {
  var divArray = [];
  for (i = 0; i <= n; i++) {
    if (n % i === 0) {
      divArray.push(i);
    }
  }
  console.log(`20의 약수 : [${divArray}]`);  
  return divArray.length;
}

// 호출부
//20의 약수 : [1 2 4 5 10 20 ] -> 약수의 개수 : 6 return
var divCount = calcDivisor(20);
console.log(`약수의 개수: ${divCount}개`);
