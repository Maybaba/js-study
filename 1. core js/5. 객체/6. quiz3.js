/*
Q. 회원의 아이디정보와 비밀번호 정보가 들어있는 객체 user가 있습니다. 
   아래 요구사항에 맞는 프로그램을 작성하고 브라우저에서 테스트하세요.
    
- 요구사항
1. 사용자에게 아이디를 입력받으세요.
2. 입력된 아이디가 객체에 존재하는 key가 아니라면
   "존재하지 않는 회원입니다"를 출력하세요.
3. 아이디가 존재한다면 비밀번호를 입력받으세요.
4. 비밀번호가 입력한 아이디에 대응해서 일치한다면
   "로그인 성공"을 출력하고 반복문을 탈출하세요.
5. 비밀번호가 다르다면 "비밀번호가 틀렸습니다" 를 출력하세요.
6. 로그인이 성공할때까지 반복하세요.
*/
var user = {
  kim1234: "kkk1234",
  lee4567: "lll4567",
  park9876: "ppp9876",
};
var userInfo = {
  userList: [
    {
      account: "kim1234",
      password: "kkk1234",
      username: "김두한",
    },
    {
      account: "park9876",
      password: "ppp9999",
      username: "박찬호",
    },
    {
      account: "hong7766",
      password: "hhh1234",
      username: "홍길동",
    },
  ],
};

//객체에서 배열만 추출한다. ( 해당하는 배열만 변수 선언한다! )
var userList = userInfo.userList;
// 아이디를 입력받는다.

while (true) {
var inputAccount = "kim1234";
  // userList에서 user라는 변수를 따로 설정한다.  
  //그래서 배열 안의 객체를 인덱스 순으로 전체적으로 보여준다.
  // 아이디를 찾고 난 뒤 해당 아이디가 포함된 배열 안에서 비밀번호를 확인하기 위한 변수 선언
var foundUser = null; 
for (var user of userList) {
  if (inputAccount === user.account) {
    console.log(inputAccount);
     foundUser = user;
     console.log(foundUser);
     break;
   } 
   //아이디가 맞지 않을때는 null값으로, 이에따른 alert를 만들거나 뭐..
}
//비밀번호가 맞을떄와 다를 때
if (foundUser !== null) {
  //비밀번호 검증하기
  //사용자에게 비번 입력받기
  var inputPassword = "kkk12432434";
  if (inputPassword === user.password) {
    console.log('로그인 성공');
    break;
  } else {
    console.log('비번울 다시 입력해주세요.');
  } 
} else {
  console.log('회원가입을 진행해주세요.');
  }
}