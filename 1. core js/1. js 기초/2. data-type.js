var num = 90; //90.0
console.log(typeof num);

console.log( num = num / 12);
//java에서는 정수만 값을 낸다. 

var foodName = 'num';
console.log(foodName); 

//string 종류 : 백틱
`` //백틱,  변수 ${}와 문자열을 같이 활용할 수 있다. 
   // 줄바꿈을 엔터로 할 수 이따!! 
   // 내부 띄어쓰기도 `가능`
//한영키와 옵션으로 백틱을 쓸 수 있다

var element = `
<nav>
  <ul>
    <li>딸기</li>
  </ul>
</nav>
`;
console.log(element);
//string 종류 : single dot
'' 
var elem = '<nav>\n\t<ul>\n\t\t<li>strawberry</li>\n\t</ul>\n</nav>';
console.log(element);
//string 종류 : double dot
""
var month = 4;
var day = 5;
var anni = 'trees day';

var sentence = `${month}월 ${day}일은 ${anni} 입니다`;

console.log(sentence);

var userAge = 30;
var flag = userAge > 19;
console.log(typeof flag);
console.log(flag);


function buyNewCar(money) {
  if (money > 5000) return 'gg';
  else if (money )
}