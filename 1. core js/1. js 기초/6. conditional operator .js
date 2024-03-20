var money = 3000;

var food = (money >= 8000 ) ? 'candy' : 'ramen';

console.log(`sellected : ${food}`);

var money = 10000;

var food = (money >= 8000) ? '돈까스' : '라면';

var food;
if (money >= 8000) {
  food = '돈까스';
} else {
  food = '라면';
}

console.log(`선택한 음식: ${food}`);



var food = (money >= 8000) ? '돈까스' 
: (money >= 5000) ? '쫄면' 
: (money >= 3000) ? '라면' : '굶어';

var food;
if (money >= 8000) {
  food = '돈까스';
} else if (money >= 5000) {
  food = '쫄면';
} else if (money >= 3000) {
  food = '라면';
} else {
  food = '굶어';
}

// 브라우저 자바스크립트 연결하기