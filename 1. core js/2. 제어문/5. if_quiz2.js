//배운거까지만 해서 만든다 ! --> 선생님 코드 참조 https://github.com/soongu/js-study202403.git

// 1. 정수 A b c 를 입력받는다. 
// 2. 입력받은 정수값을 비교한다.
// 3. 모두 다른 값 입니다, 모두 같은 값입니다, 두 값이 같은 값 입니다 출력

var a = prompt("값을 입력해주세요");
var b = prompt("값을 입력해주세요");
var c = prompt("값을 입력해주세요");

if (a === b && a ===c && b===c) {
   alert("모든 값이 서로 같습니다");
} else if (a === b || a ===c || b===c) {
  alert("두 값이 서로 같습ㄴ"); 
} else { 
  alert("모든 값이 다릅니다");
}
// 1. 정수 a, b 를 입력받는다.
// 2. 두 값의 차이를 구한다.
// 3. 두 값의 차이를 절댓값 - alert로 구해준다.

var a = +prompt("값을 입력해주세요");
var b = +prompt("값을 입력해주세요");
var d = a - b //대신에 var diff 써서 사용해도 된다. 
// var diff = (a > b) ? a - b : b - a ; if 문 대신 한번에 ! 
// var diff = (a > b) ? diff : -diff ; if 문 대신 한번에 ! 

if (d >=0 ) {
  alert(`두 값의 차이는 ${d} 입니다. `);
} else if (d <=0) { 
  var d = b - a
  alert(`두 값의 차이는 ${d}입니다.`);
}

// 1. 정수 A b c 를 입력받는다. 
// 2. 입력받은 정수값을 비교한다. 
// 3. 최소값을 절대값 alert로 구해준다. 

var a = +prompt("값을 입력해주세요");
var b = +prompt("값을 입력해주세요");
var c = +prompt("값을 입력해주세요");

if (a <= b && a <=c && b!=c) { 
  alert (`최소값은 ${a}입니다`);
} else if (b <= a && b <=c && a!=c) {
  alert (`최소값은 ${b}입니다`);
} else if (c <= a && c <=b && a!=b) {
  alert (`최소값은 ${c}입니다`);
}
//다른 방법의 코드!
// min : 최소값을 지정해 놓을 변수 
var min = a;
if( b < min ) min = b; 
if( b < min ) min = c;
alert (`최소값은 ${min}입니다.`);


