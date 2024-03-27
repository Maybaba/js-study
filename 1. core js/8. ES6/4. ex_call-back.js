//정수 n 을 전달하면 1 ~ n 까지의 모든 짝수를 출력
function showEvenNumber(n) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      push.num(i);
    }
  }
  console.log(nums);
}
function showOddNumber(n) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
  console.log(nums);
}
function showOddOrEvenNumber(n, isOdd) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === isOdd) {
      nums.push(i);
    }
  }
  console.log(nums);
}

function showAnyNumber(n, x) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (i % x === 0) {
      nums.push(i);
    }
  }
  console.log(nums);
}
// showEvenNumber(7);
// showOddNumber(7);
// showOddOrEvenNumber(7, 1);
// showTripleNumber(34, 5);


//콜백을 이용한 솔루션
//정수 n을 전달하면 1 ~ n 까지의 정수를 조건에 맞게 출력
function showNumber(n, condition) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (condition(i)) {
      nums.push(i);
    }
  }
  console.log(nums);
}
showNumber(30,  i => i % 2 === 0);
showNumber(30,  i => i % 6 === 0 && i % 3 === 0);
showNumber(30, function (i) {
  return true;
});

console.log("=========================");

//callback의 간단한 예시

function makeCook (recipeName,recipeCode) {
  console.log(`##나만의 레섯피##`);
  console.log(`요리 이름 : ${recipeName}`);
  //실제 레시피 출력은 만들어서 전달해주세요
  recipeCode();

  //실제 레시피
  console.log(`...참 쉽죠?...`);

}

makeCook(`파송송계란탁`, function() {
  console.log(`1. 물 끓이기`);
  console.log(`2. 스프넣기`);
  console.log(`3. 야채, 김치 넣기`);
  console.log(`4. 면넣기`);
  console.log(`5. 계란넣기`);
});
