//scope lifettime

var x = 99; // global scope : 전역변수
var y = true;

function foo() {
  var x = `홍길동`; //local scope : 지역 변수 return 으로 내보내지 않는 이상 함수내에서 죽게 된다
  console.log(`foo (x) : ${x}`);
  var y = `바부`;
  console.log(`foo (y) : ${y}`);
  var z = 100000;
  return y;
}

var y = foo();
console.log(`x : ${x}`);
console.log(`y : ${y}`);
// console.log(`z : ${z}`); //z is not defined
//중첩함수

function outer(m) {
  //m is local
  var n = `outer local n`;
  var v = `outer local v`;
  console.log(n); //outer local n
  console.log(v); //outer local v
  console.log(m); //outer param m
  
  
  //helper function : only for outer funtion usage
  function inner() {
    console.log(n);
    var m = `inner local m`; 
    console.log(m);
  }
  inner();
}

outer(`outer param m`);
