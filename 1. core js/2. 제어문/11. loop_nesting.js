var count = 0;
for (var i = 0; i < 3; i++) {  //3회 반복
  for(var j = 0; j < 2; j++) { //2회 반복
    console.log('멜롱' + count++);
    // console.log(`${i}, ${j}`);
  }
  console.log('멜루낭' + count++);
}

//구구단2단
var level = 2; //단수
console.log(`# 구구단 ${level}단`);
for (var line = 1; line <= 9; line++) {
  console.log(`-> ${level} x ${line} = ${level * line}`);
}

var level = 3; //단수
console.log(`# 구구단 ${level}단`);
for (var line = 1; line <= 9; line++) {
  console.log(`-> ${level} x ${line} = ${level * line}`);
};

//..................................................

for (var level = 2; level <= 9; level++) {
  console.log(`# 구구단 ${level}단`);
  for (var line = 1; line <= 9; line++) {
    console.log(`-> ${level} x ${line} = ${level * line}`);
  }
  console.log('=========================');
  }


  for (var x = 1; x <= 3; x ++ ) {
    
  }