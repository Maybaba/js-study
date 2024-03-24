// 몇 번 반복해야 할 지 모를 때 반복문을 사용한다 원하는 값을 랜덤으로 구하고 싶을 때 등

//횟수가 정해지지 않았을 때
// while(true) {

// }

//횟수가 정해졌을 때
// for () {}

//1~100사이의 랜덤정수
//random() * (y - x + 1) + x
// var rn = Math.floor(Math.random() * 10) + 1;

//for(;;) 참일 동안에 ! 
while (true) {
  var rn = Math.floor(Math.random() * 10) + 1;
  console.log('hello');
  if (rn === 7) break;
}

console.log(`endless,,,,but i'm paused now : ) `);
