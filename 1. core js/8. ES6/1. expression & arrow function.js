//fuction declaration statement : 함수선언!!문!!(정의문!!!)

const r1 = add(10, 30);
console.log(`r1 : ${r1}`);

function add(n1, n2) {
  return n1 + n2;
}

const plus = add; //not same call fuction!

// function is a data and also value!
console.log(typeof plus);

const r2 = plus(3, 6);
console.log(`r2 : ${r2}`);

const log = console.log;
log(`zzz`);

/*
    # 다음과 같은 조건을 만족하는 객체를 일급객체라고 한다.
    # 객체 = 복합데이터
    1. 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
    2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
    3. 함수의 매개변수에 함수를 전달할 수 있다.
    4. 함수의 반환값으로 사용할 수 있다.
    # 자바스크립트의 함수는 위의 조건을 모두 만족하므로 
      일급 객체라 할 수 있다.
 */

//익명함수 : 함수를 literal 로 본 경우
//fuction expression : 함수표현!!!!식!!!!
const multiply = function (n1, n2) {
  return n1 * n2;
};
//area doesn't need semicolon!
//value needs semicolon : )

const r3 = multiply(3, 4);
console.log(`r3 : ${r3}`);

const array = [
  10,
  `fse`,
  true,
  [],
  {},
  add,
  multiply,
  function () {
    console.log(`dsf`);
  },
];

const r4 = array[6](1, 2);
console.log(r4);

array[7]();
array[7]();
array[7]();

console.log(`!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`);

const dog = {
  name: `쵀쾨`,
  age: 4,
  favorite: [`strolling`, `snap`],
  //method : only used for object (obj 's  기능 표현 )
  play: function (tool) {
    console.log(`${this.name}강아지는 ${tool} 장난감으로 놀아요 ~ `);
  },
};

dog.play(`인형`);
// play(`사탕`);


const arr = {
  0: 'zzz',
  1: 'fgsdf',
  2: 'dfsdf',
  length: 3,
  indexOf: function() {},
  slice: function () {},
  push: function () {},
};


const arr2 = [];
console.log(typeof arr2);