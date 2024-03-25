/*
- Quiz. 2
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. 변수에 배열 ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수']을 저장하세요.   
2. 사용자에게 수정할 멤버 이름과 새로운 이름을 입력받고 
  해당 멤버를 수정한 뒤 수정 완료 후의 배열을 출력해서 보여주세요.
3. 배열에 없는 이름을 입력하면 'xxx는 잘못된 이름입니다.'라고 출력한 후 
   다시 수정할 이름을 입력할 수 있도록 하세요.
4. 한 명의 멤버를 정확하게 수정할때까지 프로그램은 계속되어야 합니다.
*/


var tvxq = ["유노윤호", "최강창민", "영웅재중", "믹키유천", "시아준수"];

while (tvxq.length > 0) {
  //배열에 멤버를 수장할 사람 사람 입력받기
  var userInput = prompt(`동방신기 멤버 중 삭제 및 수정할 멤버를 입력해 주세용.. 현재 멤버 : ${tvxq}`);

  //배열에 입력한 사람이 있을 경우
  if (tvxq.includes(userInput)) {
    var newname = prompt(`새로 수정할 이름을 적어주세요`);
    //인덱스넘버를 구하기
    var n = tvxq.indexOf(userInput);
    //배열의 인덱스 넘버 삭제하기
    tvxq.splice(n, 1, newname);
    alert(`멤버 ${userInput}가 삭제되었습니다. 현재 멤버 : ${tvxq}`);
  } //베열에 입력한 사람이 없을 경우
  else {
    //다시 입력하라는 알림창 띄우기
    alert(`입력한 ${userInput}은 멤버 중 없는 이름입니다. 다시입력해주세여`);
  }
}




//선생님 풀이
// var tvxq = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];

// while (true) {
//   var modifyTarget = prompt(`현재 멤버: [${tvxq}]\n수정할 이름을 입력하세요.`);

//   var idx = tvxq.indexOf(modifyTarget);

//   if (idx !== -1) {
//     // 수정 타겟이 있는경우 -> 수정 진행
//     var newName = prompt('새로운 이름을 입력하세요!');
//     tvxq[idx] = newName;
//     alert(`수정 완료!\n남은 멤버: [${tvxq}]`);
//     break;
//   } else {
//     // 없는 경우
//     alert(`${modifyTarget}은(는) 잘못된 이름입니다.\n다시 입력하세요!`);
//   }
// }


