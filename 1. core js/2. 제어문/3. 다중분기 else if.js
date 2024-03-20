var age = 16;
//하나의 그룹으로 간주되어서 if의 범위가 하나로 작동된다. 
//만약 모두 if 로 할 시 작동은 되지만 따로따로 작동되어서 값이 계속해서 나오기 때문이다. 

// else if가 너무너무 많아서 메모리를 잡아먹는 경우 switch case 를 사용할 수 있다 ! 
if (age >= 20) {
  console.log('성인입니다.');
} 
else if (age >= 17 ){
  console.log('고딩입니다');
}
 else if (age >= 14 ){
  console.log('중학입니다.');
}
 else if (age >= 8 ){
  onsole.log('초등입니다.');
}
 else if (age >= 4 ){
  console.log('유아입니다.');
}
 else {
  console.log('영유아입니다. 입니다.');
}
 