
var foodList = ['우도땅콩', '우도아이스크림', '우도치즈돈까스', '우도시그니쳐 초코딸기라떼', '우도시그니쳐 초코딸기라떼', '우도시그니쳐 초코딸기라떼'];

//indexOf() : 배열의 특정 요소(데이터)가 몇번 인덱스에 있는지 알려줌
var target = '우도시그니쳐 초코딸기라떼';


var index = foodList.indexOf(target);
console.log(`index : ${index}`);

//선형탐색 
// for (var i = 0; i < foodList.length; i++) {
//   if (target === foodList[i]) {
//   index = i;
// break;
//  }
// }

//include() : 특정 데이터가 있는지 없는지 논리로 확인
var flag = foodList.includes('우도치즈돈까스');
console.log(`flag:${flag}`); 

//slice() : 배열을 원하는 범위만큼 분할
var sliced = foodList.slice(1, 3);
console.log(sliced);
var sliced2 = foodList.slice(3);
console.log(sliced2);

//전체복사 (깊은 복사, 얕은 복사가 뭔지 java pointer memory? 에서 다루기로함)
var  sliced3 = foodList.slice();
console.log(sliced3);

console.log(foodList);

//slice를 해도 복사본에서 추출을 하는 개념이라 원본은 변하지 않음

//reverse() : 배열을 역정렬
console.log(`=================`);

var nums = [10, 20, 300, 50, 60];

var numsCopy = nums; //카비본 생성 해도 원본도 바뀐다 ... -> num.slice

nums.reverse();

console.log(nums);
console.log(numsCopy);

//concat() : 배열을 결합한 사본을 가져다 준다. 
console.log('========================');
var arr1 = [10, 20, 30];
var arr2 = [99, 999];

var concated = arr1.concat(arr2);
console.log(concated);
// [...arr, newItem];
// [...arr, ...arr2];

console.log('========================');
//splice() : 배열의 삭제 및 삽입 , 배열의 중간삭제 및 중간삽입 , 
// 원본에서 삭제삽입을 진행하므로 원본이 손상됨
console.log(foodList);

foodList.splice(2, 1); //array.splice(indexnum, delete counting)
console.log(foodList);

foodList.splice(0, 1, '마시멜로핫초코');
console.log(foodList);

foodList.splice(2, 0, '마라탕은 인정');
console.log(foodList);

foodList.splice(2); //2번째부터 끝까지 지우기