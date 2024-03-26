//for in 은 값을 참조한다. 

var phone = {
  company: '삼성', //0
  color: '펄 화이트', //1
  model: '갤럭시 S24 Ultra', //2
  prcie: 1200000, //3
};

//값이 아닌 키가 *반복*되고 있다. 
for ( var data in phone ) {
  // console.log(data);
  // console.log(phone.data);
  console.log(phone[data]);
  // console.log(typeof data);
} 

console.log('================');
// 객체 프로퍼티 유무 확인
//phone 에 새로운 프로퍼티 추가하기
//추가할 내용이 있는지 없는지 먼저 확인 후 내용을 추가하고 이미 있으면 추가하지 마세요.
console.log(`prcie` in phone); //for in 은 값을 참조한다. 
phone.memory = 111;
var newKey = 'memory';
if (!(newKey in phone)) {
  phone[newKey] = '32GB'; //phone.newkey 에서 key type이 문자열이므로 대괄호를 사용한다. 
}
console.log(phone);