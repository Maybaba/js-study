
var food1 = `우도초콜릿, 우도카페초코초코초코초코초코초코, 우도 치즈돈까스, 냉우동에 계란노른자 휙휙`;

var arr = [10, 20, 30, 40, 50, 60, 60.332432, 6, 7]; //복합데이터, 여러개의 데이터가 모여있는 것 : 객체 : object
console.log(typeof arr);

console.log(arr[1]);

console.log(arr[2] *= 2 );

console.log(arr[2]);

arr [1] =999;
arr [3]++;

console.log(arr);

// 배열 데이터 수 확인 ㄱㄴ
console.log(arr.length); 


console.log(`첫번째 데이터 : ${arr[0]}`); 
console.log(`마지막 데이터 : ${arr[arr.length -1]}`);

//배열데이터 순화 (전체참조 : travis)
console.log('===================')

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

console.log('===================')

//프로그램 돌리는 동안 배열의 개수가 자꾸 변한다. 

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//선향탐색 알고리즘 : 배열뎅티ㅓ

//for ~ of 반복문 (배열전용반복문)
var weedDayslol = ['월', '화', '수', '목', '금', '토', '일']
console.log('===================')

// for (var i = 0; i < weedDayslol.length; i++) {
//   console.log(`${weedDayslol[i]}요일입니다람쥐.후훗...`);
// }

for ( var day of weedDayslol ) { //변수를 설정하고 변수를 할당하는데, 베열의 첫번째 인덱스부터 하나씩 저장한 뒤 for 문을 돌린다. 
  console.log(`${day}요일입니다람쥐.후훗...`);
} //조건 없이 전체적으로 출력할 때 , 또 다른 조건이 있을 경우에는 사용할 수 없으니 상황별로 활용해보자! 

//배열생성관례 : 이름 복수형, -List 어미
var udoTables = [`우도초콜릿`, `우도카페초코초코초코초코초코초코`, `우도 치즈돈까스`, `냉우동에 계란노른자 휙휙`,];
var udoTableList = [`우도초콜릿`, `우도카페초코초코초코초코초코초코`, `우도 치즈돈까스`, `냉우동에 계란노른자 휙휙`,];
var udoTableArray = [`우도초콜릿`, `우도카페초코초코초코초코초코초코`, `우도 치즈돈까스`, `냉우동에 계란노른자 휙휙`,];

console.log(udoTables.length);

var tags = [
  `<li>오렌지</li>`,
  `<h1>로고</h1>`,
  `<h2>로고</h2>`, // 콜론 찍는 것이 관례이다......
];


