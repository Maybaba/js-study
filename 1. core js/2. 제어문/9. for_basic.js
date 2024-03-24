

// while은 코드가 아래에 많아지면 언제 시작하고 끝나는지 확인하기 어렵다. 
// 1-> 2-> 3-> 4-> 2 -> 3->
var i = 1; // 1. begin
while(i <= 5) { // 2. execute
  console.log("hello"); // 3. end
  i++; // 4. step
} 

// 한번에 반복될 횟수와 반복문을 보기 편하다. 
// 실행순서는 while 문과 같다 !
for (var i = 1; i <= 5; i++) {
  console.log("hello"); 





}

//1 ~ 10 누적합
var total = 0; //변수선언하기
for (var i = 1; i <= 10; i++) {
  total += i;
}
console.log(total);

//횟수지정반복문
for (var i = 0; i < 5 ; i++) {
  console.log('메로나');
}
