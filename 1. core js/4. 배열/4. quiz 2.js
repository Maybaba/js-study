/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.

- 요구사항
1. prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후, 
   입력받은 값들을 배열에 순차적으로 저장합니다.
   
2. '그만'이라고 입력하면 질문을 멈추고
   입력했던 숫자배열과 숫자의 총합(배열 요소의 합)을 계산하여 출력하세요.
*/

// 1. 데이터를 쌓는다
// 2. 쌓을 변수가 있어야 한다. 


//왜 자꾸 while 과 for의 사용을 헷갈리는지 확인해보기
//쌓아놓을 배열
var arr = [];
//숫자를 더할 변수 sum
var sum = 0;
// var i = 0; 이건 for 문일때 사이즈가 정해져 있을 때 
while (true) {
  //사용자에게 숫자를 입력받기 
  var num = prompt('숫자를 입력해 주세요! \n그만두려면 '그만'이라고 입력하세요...');
  // +'11' = 11
  // +'그만' = NaN
  if (num === '그만') {
    break;
  }
  //숫자를 배열에 추가한다.   
  arr.push(num);  
  //추가한 배열에서 계속 더한다.  앞에 있을 경우 아래로 흐르는 논리에 따라, 그리고 반복문의 논리에 따라서 '그만' 까지 올라간다. 
  sum += Number(num);

  }
  alert (`총합 : ${sum}, 배열 : ${arr} `);


  
  
  //선생님의 문제풀이!!!! 뀨락뀰ㄲ릮루룪
  // 숫자들을 쌓아놓을 배열
var numbers = [];

while (numbers.length < 6) {
// 사용자에게 숫자를 입력받기
var userInput = +prompt('숫자를 입력하세요. \n그만두려면'그만'이라고 입력하세요!');
//입력한 요소가 6개가 넘었어야 할 때도 멈추기
if (userInput === '구먼' || numbers.length >= 6) break;
// 입력받은 숫자를 배열에 추가하기
numbers.push(+userInput);
}
//총합 계산하기
var total = 0;
for (var n of numbers) {
  total += +n;
}

alert (`총합 : ${sum}, 배열 : ${arr} `);
console.log(numbers);
console.log(total);

