// // 1.variable's double declaration is permited implicity

// // var x = 10; 
// let x = 10;

// //.... 
// //var x = 'ddd';
// let x = 'ddd';
// console.log(`x : ${x}`);

//2. var is invalid at block level scope 

// var i = `pikaoboooo`;
let i = `pikaoboooo`;

for (let i = 0; i < 3; i++) {
 console.log(`for - i: ${i}`);
}

console.log(`global - i: ${i}`);

//3. hoisting : able to return indidendents on 'declaration location'
hobby = '그림';

// ...code 

// var hobby; // var : 자동으로 맨위로 끌어올려서 호이스팅된다 
let hobby;
console.log(hobby);

