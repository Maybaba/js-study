// 객체 생성
// 우리 집 고양이 정보 저장
var name = '복댕';
var kind = '코숏';
var age = 5;
var injection = true;
var favorite = ['숨바꼭질', '곰돌이인형', '술래잡기',];
var bark = () => console.log('야옹');

// var cat = [
// '복댕',
// '코숏',
// 5,
// true,
// ['숨바꼭질', '곰돌이인형', '술래잡기',],
// () => console.log('야옹'),
// ];

var cat = {
  name: '복댕',
  kind: '코숏',
  age: 5,
  injection: true,
  favorite: ['숨바꼭질', '곰돌이인형', '술래잡기',],
  hate: {} //객체 안의 객체
  //33: 33 // key 의 이름으로는 숫자 안됨
  //'for somthing ': 33 // 띄어쓰기 ㄴ 하게되면 문자열로 키의 리음 설정
};

//다른 집 강아지 정보 저장
var dog = {
  name : '뽀삐',
  kind : '진돗개',
  age : 3,
  injection : true,
  favorite : ['산책', '간식', ],
  bark : () => console.log('몽몽'),
  hate : null //모든 종류의 데이터를 넣을 수 있다. 
};

console.log(cat.name);
console.log(dog.name);

//예시로 게시판글의 객체 안의 객체 안의 객체 이런식으로 만들어져 있다 ..! 

console.log(`========================`);

//객체에 저장된 데이터 참조 (조회)

console.log(dog.age);
console.log(dog.bark());
console.log(cat.injection);
console.log(cat.favorite[0]);

//데이터 타입 : 어떤 데이터가 할 수 있는 일을 정의
dog.age++
!dog.injection
dog.favorite.push('기다리기');

dog.favorite.slice(0).splice(1, 1).reverse();

//slice , concat은 사본을 추출한다!!
//위의 methods 다음에 splice 나 reverse를 적용시키면...?
//사본에만 영향이 간다. 

console.log(favorite);

//객체를 참조하는 두번째 방법
console.log(`============================`);

var key  = 'name';
console.log(dog.name);
console.log(dog['name']);
console.log(dog[key]);
// console.log(dog[name]);

//프로퍼티 수정 : 기존에 있는 key로 접근
console.log("========================");

dog.age = 4;
cat.favorite[6] = '실뭉치';

console.log(dog);
console.log(cat);

//프로퍼티 동적 추가 기존에 없는 key로 접근
console.log("=================================");

cat.friend = '윤종';

console.log(cat);

//프로퍼티 삭제
delete cat.hate;

console.log(cat);