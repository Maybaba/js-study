const food = '돈까스..?';
const userName = '스윙스....??';

console.log(`${food}의 왕 ${userName}`);

// 브라우저 전용함수 : nodejs 환경에서느 작동불가
// prompt () ; 브라우저에서 입력을 할 수 있게 해주는 함수
// confirm () ; 브라우저에서 확인,취소를 할 수 있게 해주는 함수
// alert () ; 브라우저에서 알림참을 띄우는 함수

//프로그램 안에서 모든 데이터를 사용하려면 변수 안에 저장해야 한다. 
var youtName = prompt(`이름`);
alert(`입력한 이름 : ${youtName}`);


var resultFlag = confirm(`다시`);
console.log(`나의 대답 : ${resultFlag}`);


var n1 = +prompt('첫번째 수를 입력하세요!');
var n2 = +prompt('두번째 수를 입력하세요!');

alert(typeof n1);
alert(`두수의 합: ${n1 + n2}`);



