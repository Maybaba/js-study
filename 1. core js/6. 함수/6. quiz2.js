
/*
1. 키(cm)와 몸무게(kg)을 인수로 전달받아 
2. bmi지수를 계산하여 반환함과 동시에 
3. bmi가 25.0이상이면 "당신은 과체중입니다." 
  18.5이하면 "당신은 저체중입니다." 
  나머지는 "당신은 정상체중입니다."를 출력하는 
  CalcBMI라는 함수를 정의하고 호출하세요. 
# bmi 계산식 : 몸무게(kg) / (키(m) * 키(m)) 
# 출력 예시: 
"키 -> 178.4cm, 체중-> 78.2kg의 체질량지수는: 24.57입니다"
*/

//함수 모듈화 시키기
function judgeWeignt (BMI) {
  if (BMI >= 25.0 ) {
    level = `과`;
  } else if ( BMI <= 18.5 ) {
    level = `저`;
  } else {
    level = `정상`;
  }
  console.log(`당신은 ${level} 체중입니다. `);

}
//어떤 숫자를 자릿수만큼 반올림하는 함수
function round (number, position) {
  return Math.round(number * 100) / 100; 
  // return number.toFixed(position) + 100;
}

function calcBMI(h, w) {
  var m = h/100;
  var BMI = (w / (m * m)); // 받은 H 를 미터로 변환하기

  judgeWeignt(BMI);
  
  return BMI;
}

var h = 178.4, w = 100.2;
var myBmi = calcBMI(h, w);
//Math.round(5.7899999) //  반올림 -> 6
console.log(`키 -> ${h}cm, 체중 -> ${w}kg의 체질량지수는 ${round(myBmi, 3)}입니다.`);









