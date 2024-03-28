const userList = [
  {
    account: "abc1234",
    userName: "대길이",
    job: "추노",
    address: "제주도",
    hobbys: ["수영", "축구", "테니스"],
    salary: 122200000,
    age: 35,
  },
  {
    account: "banana",
    userName: "빠나나",
    job: "과일",
    address: "서울",
    hobbys: ["푸드파이팅", "테니스"],
    salary: 9700000,
    age: 18,
  },
  {
    account: "park1234",
    userName: "주차왕",
    job: "발렛파킹",
    address: `서울`,
    hobbys: ["족구", "축구", "테니스", "영화감상"],
    salary: 3900000,
    age: 56
  },
  {
    account: "fire",
    userName: "불꽃남자카리스마",
    job: "게이머",
    address: "독도",
    hobbys: ["독서", "테니스"],
    salary: 90012000,
    age: 42,
  },
];



// for (user of userList) {
//   console.log(`내 이름은 ${user.userName}이구요 ${user.address}에 살아요!`);
// }


//배열 고차함수 
//forEach() :  배열의 요소를 순회한다. 

//for 문도 함수로 대치할 수 있다! 
userList.forEach(user => {
  console.log(`내 이름은 ${user.userName}이구요 ${user.address}에 살아요!`)
});


function myForEach() { //아래와 같다.
  for (const x of array) {
    Callback(x);
    }
}



let total = 0;
[10, 20, 30].forEach (n => {
  total += n;
});
console.log(`total : ${total}`);

console.log("```````````````````````````````");
//filter : 조건에 ㅏㅁㅈ는 배열안의 요소를 필터링한다. 
const numbers = [1,2,3,4,5,6,7,8,9,10];

//자사스크립트 내장함수(?)이므로 편하게 함수를 사용할 수 있다. 
const filteredArray = numbers.filter(n => n % 3 === 0);
console.log(filteredArray);

//회원목록에서 이름이 3글자인 회원 필터링
//<어디에서 필터링할거니>.<무슨필터함수니>.(어떤 걸 넣어서 => 어떤 함수를 적용시킬거니);
const filterUserList 
= userList.filter(user => user.userName.length === 8);
console.log(filterUserList);

//map : 배열에서 특정 데이터드릉ㄹ 추출해서 새로운 배열에 매핑한다. 
console.log(`=================================`);

// 실시간 배열 추가하기 
const mappedNumbers = numbers.map(n => `<li class = "list item">${n}</li>`);
console.log(mappedNumbers);

// map: 배열에서 특정 데이터들을 추출해서 새로운배열에 매핑

// filter => 10개의 데이터를 필터링하면 10개 이하로 남음
//        ex) 10명 중 서울사는애들 필터링! ->  3명만 남음
// map => 10개의 데이터를 매핑하면 항상 10개짜리 배열이 나옴
//        ex) 10명의 회원정보 중 이름정보만 10개 가져와
const mappedUsers = userList.map(user => `${user.age}세`);
console.log(mappedUsers);

//회원목록에서 회원 이름과 회원의 나이와 회원의 주소를 추출할건데
//이름의 키값을 nickname 나이는 old 주소는 addr 로 하고 싶음 

// const mappedUserList = userList.map ( function (user) {
//  return { nickName  : user.userName,
//   old : user.age,
//   addr :user.address, };
// }
// );
const mappedUserList = userList.map ( user => 
 ({ nickName  : user.userName,
  old : user.age,
  addr :user.address, 
}));
console.log(mappedUserList);

const triple = numbers.find(n => n % 3 === 0); //처음 발견된 3의 배수를 찾아낸다. 헤헤 : 3
console.log(`${triple}`);

const twenty = userList.find(user => user.age >= 50 && user.age < 60);
console.log(twenty);

userList.some() // 와우!!!!!!!! 이미 있었다네!!! 홀홀호롷롷롷롷로홀호롷로홀
// 참고하기 : https://ko.javascript.info/array-methods#ref-316