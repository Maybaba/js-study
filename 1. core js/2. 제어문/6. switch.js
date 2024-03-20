//switch 는 elseif 가 너무 많을 시 활용할 수 있다. 

var season = prompt('선호하는 계절을 입력하세요!');


// 조건을 판별할 변수 (비교식x, 문자값이나 숫자값만 써야 함)
switch (season) {

  case '봄': case 'spring':
    alert(`봄에는 여의도로 가세요`);
    //코드를 흘러내리지 않게 break를 걸어준다. 
    break; 
  case '여름': case 'summer':
    alert(`여름에는 제주도로 가세요`);
    break; 
  case '가을': case 'autumn':
    alert(`가을에는 순천만으로 가세요`);
    break; 
  case '겨울': case 'winter':
    alert(`겨울에는 강원도로 가세요`);
    break; 
    default:
      alert('봄, 여름, 가을, 겨울 중 하나를 입력하세요!');
}
