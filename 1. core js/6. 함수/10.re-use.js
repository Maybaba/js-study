const NOT_FOUND = -1;


//배열안에 특정 요소의 인덱스를 찾아 반환하는 함수
function myIndexOf(array, searchElement) {
  for (var i = 0; i < array.length; i++) {
    if (searchElement === array[i]) {
      return i;
    }
  } 
  return NOT_FOUND;
}
  function myIncludes(array, searchElement) {
    // for (var i = 0; i < array.length; i++) {
    //   if (searchElement === array[i]) {
    //     return i;
    return myIndexOf(array, searchElement)!== NOT_FOUND;      
}

var foods = ['우도', '애월', '남원', '섭지코지'];

var idx = myIndexOf(foods, '애월읍');
console.log(`index : ${idx}`);

var flag = myIndexOf(foods, '애월');
console.log(`flag : ${flag}`);

