//result에는 56이 리턴되어야 함.
function min2 (a1, a2) {
  
  // var min = Math.min(a1, a2);
  // return min;
  //삼항연산자 활용해서
  return a1 > a2 ? a2 : a1;
};

var result1 = min2(134, 56);
console.log(`result1: ${result1}`);

// 셋중에 가장 작은 수 50이 result에 저장되어야 함.
function min3 (a1, a2, a3) {
  var min = Math.min(a1, a2, a3);
    return min;
  };

var result2 = min3(120, 50, 99);
console.log(`result2: ${result2}`);


// 숫자 1개를 전달하면 해당 숫자가 짝수인지 판별하는 함수
// 24를 전달하면 true리턴, 홀수를 전달하면 false리턴, 
// 단, 0은 짝수취급
function isEven(n) {
  // if (n % 2 === 0) {
  //   return 'true';
  // } else {
  //   return 'false';
  // }
  //어차피 논리값을 반환해야 하므로.
  return n % 2 === 0;
} 

var result3 = isEven(3);
console.log(`result3: ${result3}`);
