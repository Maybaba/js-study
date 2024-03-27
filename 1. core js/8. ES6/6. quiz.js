
const userList = [
  {
    account: 'abc1234',
    userName: '대길이',
    job: '추노',
    address: '서울',
    hobbys: ['수영', '축구', '테니스'],
    salary: 5400000,
    age: 35,
  },
  {
    account: 'banana',
    userName: '빠나나',
    job: '과일',
    address: '서울',
    hobbys: ['푸드파이팅', '테니스'],
    salary: 2700000,
    age: 18,
  },
  {
    account: 'park1234',
    userName: '주차왕',
    job: '발렛파킹',
    address: '경기',
    hobbys: ['족구', '축구', '테니스', '영화감상'],
    salary: 3900000,
    age: 56,
  },
  {
    account: 'fire',
    userName: '불꽃남자카리스마',
    job: '게이머',
    address: '서울',
    hobbys: ['독서', '테니스'],
    salary: 7900000,
    age: 42,
  },
];


//회원정보에서 회원의 이름만 다 추출해서 배열에 담아줘
//콜백 다시한번 개념 정리하기



function map (callback) { //호출할 함수의 parameter : 변수명 선언 
  let mappedArray = []; //목록 모듈화 어떻게 할 지 시도해보기
  for (const user of userList) { //추출할 배열명 선언, 반복
    mappedArray.push(callback(user)); //호출할 함수와 매개변수 작성!
  } 
  return mappedArray;
}
console.log('=========================');
const nameList = map(user => user.userName);
console.log(nameList);

//회원정보에서 회원의 주소만 . 다추출해서 배열에 담아줘


const addressList = map(user => user.address);
console.log(addressList);

//회원의 첫번쨰 취미들만 다 추출해줘


const firstHobbyList = map(user => user.hobbys[0]);
console.log(firstHobbyList);

//모든 회원의 이름과 계정을 연결해서 배열에 담아줘
// [대길이(abc1234), 빠나나(banana),...]

const myCustomList = map(user => `${user.userName}(${user.account})`);
console.log(myCustomList);

