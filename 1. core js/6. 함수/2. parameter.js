// x 부터 y 까지의 누적합을 구해야 함. 

// 1 ~ 10까지의 합



function calcRangeTotal(x, n) {
  var total = 0; //변수 선언이 안된 변수 x, n : parameter
  for (var i = x; i <= n; i++) {
    total += i;
  }
  return total;
}

//누적합 함수 호출
var result1 = calcRangeTotal(1, 10);
console.log(result1);

var result2 = calcRangeTotal(3, 22); //바깥쪽에서 호출할 데이터 : 매개변수 : paremeter
console.log(result2);

//매개변수의 기본값

function sayHello(language='한국어') {
  
  // console.log(language);
  //ES5
  // language = language || '한국어';
  
  switch(language) {
    
    case '한국어':
      console.log('안녕하세요');
      break;
    case '영어':
      console.log('hello');
      break;
    case '일본어':
      console.log(' そらみ氏');
      break;
    case '중국어':
      console.log('한자중국어인ㄴ이ㅏ른아ㅣ');
      break;
      default:
      console.log('우가우가~~~');
  }
}
sayHello('일본어');


//매개변수가 없는 함수
function selectRandomPet() {

  var pets = ['멍멍이', '야옹이', '노루', '짹짹', '고라니'];
  var rn = Math.floor(Math.random() * pets.length);

  return pets[rn];
} 
var r1 = selectRandomPet();
var r2 = selectRandomPet();
var r3 = selectRandomPet();
console.log(`r1 : ${r1}`);
console.log(`r2 : ${r2}`);
console.log(`r3 : ${r3}`);