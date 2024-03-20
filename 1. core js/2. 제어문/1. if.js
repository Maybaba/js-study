// 랜덤 정수 생성하기 (스트리밍 랜덤 재생 등)

//동양은 1부터 시작하고 서양은 0부터 시작함!!
var randomNumber = Math.floor(Math.random() * 101);
console.log(`랜덤값: ${randomNumber}`);
// 랜덤정수 ---------> 난수의 범위
// Math.random() -------> 0.0 <= ~ < 1.0 
// Math.random() * 10 --> 0.0 <= ~ < 10.0 
// 소수점 이하를 버린다. 
// Math.floor(9.389) // 9

// Math.floor(Math.random() * 10) --> 0.0 <= ~ < 10.0
// Math.floor(Math.random() * 10) + 1; --> 1.0 <= ~ < 11.0

//랜덤 범위 정수값 공식 
// x 이상 y이하 랜덤정수 생성하기 ! 

// Math.floor(Math.random() * (y - x + 1)) + x
// # 117 ~ 142
// Math.floor(Math.random() * (142 - 117 + 1)) + 117


// 점수가 몇점 이상이면 출력하기!

// var score = 59;
console.log(`점수 : ${randomNumber}점`);

//true or false 가 등장하는 코드를 실행해야 한다. 
// if (randomNumber >= 60) {
//   console.log("합격desu");
// } else {
//   console.log("괜찮아 그럴 수 있지..");
// }

if (randomNumber >= 60) {
  console.log("합격desu");
} (randomNumber < 70) {
  console.log("괜찮아 그럴 수 있지..");
}
//어디서 문법이 잘못된겨