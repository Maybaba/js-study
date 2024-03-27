
let x;
x = `akakakakak`;
console.log(x);


//const declaration
const y = `메롱`;
// y = `ggggggggg`;
console.log(y); //SyntaxError: Missing initializer in const declaration

const PI = 3.14159265;
const COLOR_GREEN = `#0f0`;
/*
 $div.style.background = COLOR_GREEN;
*/

//constant can 불변성 유지
let kim = {
  name : `kim-chel-soo`,
  age : 30,
};

kim.age = 31;
kim.name = 'michel kim';

//객체지향 프로그래밍
// kim = {
//   name : `kim-chel-soo`,
//   age : 30,
// };

//array is part of object
//also function is part of object
const array = {
  0 : `z`,
  1 : `a`,
  2 : `2gs`,
  length : 3,
};

