//네개의 총합과 평균점수가 출력이 되어야 한다. 


var scores = [78, 57, 98, 67, 87,100, 388, 339]
// let added = [2] + [3] + [5] 내가 이렇게 썼던 이유는 배열 안의 수를 직접 더하려 헀었다 

let sum = 0; // [2] 내가 썼던 것들은 인덱스 넘버였다 ㅋㅋㅋ ... ㅋㅋㅋㅋㅋ (정신차려.....)
for (i = 0; i < scores.length; i++) {
  sum += scores[i];
  // total += scores[0];
  // total += scores[1];
  // total += scores[2];
  // total += scores[3];
  // total += scores[4]; ... 
}
let mean = sum/scores.length;
// console.log(78 + 57 + 98 + 67 + 87);
// console.log([0] + [1] + [2] + [3] + [4]);

console.log (`총점은 : ${sum} 평균은 : ${mean}`);

for (var sum01 of scores) {
  total += sum01;
}

//
