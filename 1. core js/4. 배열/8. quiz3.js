/*
- 3번 Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항

1. 3개의 메뉴를 만들어서 추가하고 삭제하고, 종료할 수 있도록 해주세요
*/

var tvxq = ["유노윤호", "최강창민", "영웅재중", "믹키유천", "시아준수"];

while (true) {
var selectMenu = +prompt(`원하는 메뉴를 선택해주세요! \n현재 멤버 [${tvxq}] \n 0번 : 추가하기 \n 1번 : 멤버 수정하기 \n 2번 : 멤버 삭제하기 \n 3번 : 프로그램 종료`);

  if (selectMenu == 0) {
    var add = prompt(`추가할 멤버 이름을 입력해주세요. 현재 멤버 : [${tvxq}]`); 
    tvxq.push(add);
    alert (`멤버가 다음과 같이 추가되었습니다 : ${tvxq}`); 
  }
  else if (selectMenu == 1) {
      var modify = prompt(`수정할 멤버 이름을 입력해주세요. 현재 멤버 : [${tvxq}]`); 
      if (tvxq.includes(modify)) { //또 안에서 안돌게끔 while을 빼서 해보기
        var i = tvxq.indexOf(modify);
        var modified = prompt(`새로운 이름을 입력해주세요.`);
        tvxq.splice(i, 1, modified);
        alert (`멤버가 다음과 같이 수정되었습니다 : ${tvxq}`);
        break;
      } else {
      alert (`입력한 멤버${modify}는 없는 멤버입니다. 다시 입력해 주세요...`);
    }
  }
  else if (selectMenu == 2 ) {
    var deleted = prompt(`삭제할 멤버 이름을 입력해주세요. 현재 멤버 : [${tvxq}]`); 
    if (tvxq.includes(deleted)) {
     var i = tvxq.indexOf(deleted);
     tvxq.splice(i, 1);
     alert (`[${deleted}]가 삭제되었습니다. 멤버가 다음과 같이 수정되었습니다.: ${tvxq}`);
     break;
    } else {
     alert (`입력한 멤버${deleted}는 없는 멤버입니다. 다시 입력해 주세요...`);
  }
}
  else if (selectMenu == 3) {
    alert (`프로그램이 종료되었습니다. `);
    break;
  }  

  else {
    alert(`메뉴를 잘못 입력했습니다. 다시 입력해주세요`);
  }
}










//정인이 풀이
// var tvxq = ["유노윤호", "최강창민", "영웅재중", "믹키유천", "시아준수"];

// while (tvxq.length !== 0) {
//   let input = +prompt(`현재멤버 ${tvxq}\n메뉴를 선택하세요.\n1.새로운 이름 추가\n2.기존 이름 삭제\n3.프로그램 종료`);

//   if (input === 1) {
//     let add = prompt(`추가할 새로운 이름을 입력하세요`);
//     alert(`${add}가 추가되었습니다.`);
//     tvxq.push(add);
//   }

//   if (input === 2) {
//     let remove = prompt(`삭제할 멤버의 이름을 입력하세요.`);
//     if (tvxq.includes(remove)) {
//       let i = tvxq.indexOf(remove);
//       alert(`${remove}가 삭제되었습니다.`);
//       tvxq.splice(i, 1);
//     }else{
//         alert(`해당 이름은 없습니다.`);
//     }
//   }

//   if (input === 3) {
//     alert(`프로그램을 종료합니다.`);
//     break;
//   }
// }


//선생님풀이
// while (true) {
//   var choice = prompt(
//     `현재 멤버: [${tvxq}]\n메뉴를 선택하세요.\n1. 새로운 이름 추가\n2. 기존 이름 삭제\n3. 프로그램 종료`
//   );
//   if (choice === '1') {
//     var newName = prompt('추가할 새로운 멤버의 이름을 입력하세요.');
//     tvxq.push(newName);
//     alert(`${newName}이(가) 추가되었습니다.`);
//   } else if (choice === '2') {
//     var delName = prompt('삭제할 멤버의 이름을 입력하세요.');
//     var idx = tvxq.indexOf(delName);
//     if (idx !== -1) { //찾기는 찾았다! 라서 인덱스를 그렇게 복잡하게 찾을 필요가 없다...
//       tvxq.splice(idx, 1);
//       alert(`${delName}이(가) 삭제되었습니다.`);
//     } else {
//       alert(`${delName}은(는) 잘못된 이름입니다.\n다시 입력하세요!`);
//     }
//   } else if (choice === '3') {
//     alert('프로그램을 종료합니다.');
//     break;
//   } else {
//     alert('잘못된 입력입니다. 메뉴 번호를 정확하게 입력해주세요.');
//   }
// }

