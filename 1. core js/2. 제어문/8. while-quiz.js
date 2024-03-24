// 1. 첫번째 문제
var a = +prompt("첫번째 숫자를 입력해 주세요"); // 첫번째 숫자 입력받기
var b = +prompt("두번째 숫자를 입력해 주세요");// 두번째 숫자 입력받기

//첫번째 수가 더 클 때만 스왑하는 코드
if (a > b) {
  var t = a;
  a = b;
  b = t;
}

var total = 0;
//첫번째와 두번째 숫자의 누적합 구하기
while ( a <= b ) {
  console.log(`${a}`);  
  result += a;
  a++;
}
alert (result);

// 양의 정수를 입력하면
// +- 기호가 교차하여 정수개수만큼 나온다.
var count = +prompt("정수를 입력해 주세요"); //반복문 회전 수 
 //기호를 누적할 변수 
var mark = ''; //console.log 가로로 출력하기

var i = 1;
while (i <= count) { //입력받은 수 까지
  if (i % 2 === 1) { //홀수일 경우
    mark += '+';
  } else { //짝수일 경우
    mark += '-';
  }
  i++; //계속 증가한다.
}
alert(mark);

