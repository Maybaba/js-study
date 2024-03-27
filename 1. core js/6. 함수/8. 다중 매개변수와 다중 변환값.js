
  function add2(n1, n2) {
    return n1 + n2;
  }

  function add3 (n1, n2, n3) {
    return n1 + n2 + n3;
  }

    //100만줄이 있어도....

  //만약 n개의 정수 합을 구해주느 함수를 만들어야 한다면 
  //파라미터에 집합자료형 (배열, 객체)을 전달한다. 

  function addAll(numbers) {
    var total = 0;
    for (var n of numbers) {
      console.log(`${numbers}`)
      total += n;
    }
    return total;
  }

  var r1 = addAll([5, 9, 2, 4]);

console.log(`r1 : ${r1}`);
console.log(`===========================`);

  //ES6 - spread 문법 : 다중 매개변수, 다중 변환값, 배열 말고 다른거 활용할 때도 사용 가능할 듯..
  function addAllES6(...numbers) {
    console.log(` numbers : ${numbers}`);
    var total = 0;
    for (var n of numbers) {
      console.log(`${numbers}`)
      total += n;
      console.log(`total : ${total}`);
    }
    return total;
  }

  var r2 = addAllES6([10, 20, 30, 40], [2, 3, 4]);
  console.log(`r2 : ${r2}`);
  console.log(`===========================`);

  //다중 반환값
//함수의 반환값은 언제나 하나드아....!!

function arithmeticOperate(n1, n2) {
  // var subResult = n1 - n2; 변수는 2회 이상 활용 될 때 선언하는게 좋다, 
  // var mulResult = n1 * n2;
  // var divResult = n1 / n2;
  return {
    add : add2(n1, n2), 
    sub : n1 - n2,
    mul : n1 * n2,
    div : n1 / n2,
  }; //holly molly
}

var r3 = arithmeticOperate(20, 30);
console.log(`r3 : add : ${r3.add}`);
console.log(`r3 : sub : ${r3.sub}`);
console.log(`r3 : mul : ${r3.mul}`);
console.log(`r3 : div : ${r3.div}`);
//배열로 return 하면 순서가 바뀌면 꼬여버리기 때문에 object 사용한다. 

var r4 = arithmeticOperate(5, 3).mul;
console.log(`r4: ${r4}`);

function foo() {
  return [{id : 'hh'}, 2, 3]
}