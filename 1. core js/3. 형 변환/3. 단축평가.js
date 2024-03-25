

true && true; //t
true && false; //f
false && true; //f
false && false; //f

//ㅋㅋㅋㅋ 틀린건 틀린게 맞구만?? 

true || true; //t
true || false; //t
false || true; //t
false || false; //f

//or 연산 : 첫번째 truthy를 반환
console.log('hello' || 'bye');
console.log( null || 'bye');

//&& : 첫번째 falsy를 반환
console.log(`메롱` && NaN && `KIN`);
console.log( 0 && `KIN`);

console.log('========================================')

if (true) {
  console.log('옥게이');
};

true && console.log('오옥게이이이이ㅣ');

/*

<h1> 안녕하세요 </h1> 
login && <h2> 환영한다..... </h2> 

제주도 우도 가서 초코디저트 먹고싶다..... 제주도 가고싶다..... 우도 가고싶다........제주도 가고싶다....... 너무 그립다 제주도 
제주도 가고싶다 제주도 가고싶ㄷ가 ㅈ제주도 가고싶!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  쿠폰당첨여부 && sendCoudpon();
  내게시물여부 && <button>삭제</button>

  당첨안됐을 때
  !쿠폰당첨여부 && sendCoudpon();
  쿠폰당첨여부 || sendMessage();

*/