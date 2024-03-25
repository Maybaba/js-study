/*
- Quiz.1 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. 변수에 배열 ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수']을 저장하세요.   
2. 사용자에게 삭제할 멤버 이름을 입력받고 해당 멤버를 배열에서 삭제시킨 뒤 삭제 완료 후의 배열을 출력해서 보여주세요.
3. 배열에 없는 이름을 입력하면 'xxx는 잘못된 이름입니다.'라고 출력한 후 다시 삭제할 이름을 입력할 수 있도록 하세요.
4. 전체멤버를 정확하게 삭제할때까지 프로그램은 계속되어야 합니다.
*/
//배열에 멤버 저장하기
var tvxq = ["유노윤호", "최강창민", "영웅재중", "믹키유천", "시아준수"];

while (tvxq.length > 0) {
  //배열에 삭제할 사람 입력받기
  var userInput = prompt(`동방신기 멤버 중 삭제할 사람을 입력해 주세용.. 현재 멤버 : ${tvxq}`);

  //배열에 입력한 사람이 있을 경우
  if (tvxq.includes(userInput)) {
    //인덱스넘버를 구하기
    var n = tvxq.indexOf(userInput);
    //배열의 인덱스 넘버 삭제하기
    tvxq.splice(n, 1);
    alert(`멤버 ${userInput}가 삭제되었습니다. 현재 멤버 : ${tvxq}`);
  } //베열에 입력한 사람이 없을 경우
  else {
    //다시 입력하라는 알림창 띄우기
    alert(`입력한 ${userInput}은 멤버가 아니니 다시입력`);
  }
}
alert(`전체 멤버가 삭제되었습니다! 현재 멤버 : ${tvxq}`);

//선생님 풀이

//삭제타겟이 있는 경우와 없는 경우 -> 삭제 진행

// var tvxq = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];

// while (tvxq.length > 0) {
//   var modifiedTarget = prompt(`현재 멤버: [${tvxq}]\n삭제할 이름을 입력하세요.`);

//   if (tvxq.includes(modifiedTarget)) {
//     // 삭제 타겟이 있는경우 -> 삭제 진행
//     var index = tvxq.indexOf(modifiedTarget);
//     tvxq.splice(index, 1);
//     alert(`삭제 완료!\n남은 멤버: [${tvxq}]`);
//   } else {
//     // 없는 경우
//     alert(`${modifiedTarget}은(는) 잘못된 이름입니다.\n다시 입력하세요!`);
//   }
