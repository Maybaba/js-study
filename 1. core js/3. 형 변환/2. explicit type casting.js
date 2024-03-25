var x = '30.3', y = '40.2';

var result = Number(x) + Number(y); //number 생성자로 문자를 숫자변환
var result2 = parseInt(x) + parseInt(y); //parseInt 생성자로 문자를 저웃로 바꾼다. parseDouble을 사용하면 소수점을 지킬 수 있다.  
var result3 = +x + +y; 

console.log(result);
console.log(result2);
console.log(result3);

var m = '' + 10 + 20;
console.log(m); //숫자를 문자로 변환할 땐 맨 앞에 '' 빈 문자열을 넣어준다. 

var f =false; //마찬가지로 논리값도 스트링타입으로 출력 가능하다. 

console.log('=============================');

console.log(Boolean('hello'));
console.log(Boolean(null));
console.log(!999); //숫자를 논리 반전 하여라.. -> falsy 한값인지 아닌지 판단 -> truthy 값이라 판단 
console.log(!!999); //숫자를 논리 반전 하여라.. -> falsy 한값인지 아닌지 판단 -> truthy 값이라 판단 -> 논리 반전
console.log(!!undefined);

// 예를 들어, 회원 로그인 여부 확인하는 방법
function isLogin() {
  const token = window.localStorage.getItem('LOGIN_ACCESS_TOKEN');

  return token !== null;
}