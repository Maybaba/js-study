/*
Q2. 모든 팀원의 월급에 대한 정보를 담고 있는 객체가 있다고 해봅시다.
var salaries = {
  kim: 1000000,
  park: 1600000,
  lee: 1300000
}
- 모든 팀원의 월급을 합한 값을 구하고, 
  그 값을 변수 total에 저장해주는 코드를 작성해보세요. 
  total엔 3900000이 저장되어야겠죠?
*/

var salaries = {
  kim: 1000000,
  park: 1600000,
  lee: 1300000
};

//모든 팀원의 월급!!을 추출하기

// var data = salaries;
// console.log(data.kim);  //0

// var data = salaries;
// console.log(data.park);  //1

// var data = salaries;
// console.log(data.lee);  //2

//모든 팀원의 월급을 더하기

var total = 0;
for (var data in salaries) { //배열에서의 in은 key의 값을 참조한다 
    total += salaries[data];  // 반면 배열에서의 for 는. 변수에 배열값을 하나하나 할당한다. for 문이 끝날때까지
}
console.log(total);

// dog.age
// dog['age']

