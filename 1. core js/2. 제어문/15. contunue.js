

for (var i = 1; i <= 10; i++) {
  if (i%2 === 0) continue; //skip과 같은의미
  console.log(i);
}
console.log('the end');

while (true) {
  var n = +prompt(`type number!`);

  if (n === 0) break; //data type = false = 0 = 내용이 없는 data
  else if (n === 1) continue;

  alert('be');
}
alert('end');

