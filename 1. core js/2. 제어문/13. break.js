
for (var i = 1; i < 50; i++) {
  console.log(i);
  if(i > 10) {
    break;
  }
}
console.log('===================');

soda : for (var i = 0; i < 3; i++) {    
  if (true) break;   // i : 0, j : 0 - break
 drink : for (var j = 0; j < 2; j++) {     // i : 1, j : 0 - go
    if (i === j) {                         // i : 1, j : 1 - break
      break soda;                        // i : 1, j : 2 - break
    }
    console.log(`${i}`, `${j}`);
  }
}
// 