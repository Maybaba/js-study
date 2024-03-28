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
    salary: 702220000,
    age: 18,
  },
  {
    account: "park1234",
    userName: "주차왕",
    job: "발렛파킹",
    address: `서울`,
    hobbys: ["족구", "축구", "테니스", "영화감상"],
    salary: 90012000,
    age: 56,
  },
  {
    account: "fire",
    userName: "불꽃남자카리스마",
    job: "게이머",
    address: "서울",
    hobbys: ["독서", "테니스"],
    salary: 90012000,
    age: 42,
  },
];

//내가 처음으로 시도한 방법 :
//서울을 찾은 뒤 포함한 배열의 인덱스 전체를 펼치려 함.
//실패함

// function find(callback) {
//   const mappedArray = [];
//   for (const user of userList) {
//     if (callback(user)) {
//       mappedArray.push(user.userName);
//     }
//   }
//   console.log(mappedArray[0]);
//   if (mappedArray[0] === user.userName) {
//     return user;
//   }
// }

//두번째 방법
//서울을 포함한 인덱스를 찾아서 새로운 배열에 저장함
//새로운 배열에서 0번째 인덱스 리턴
function find(callback) {
  const mappedArray = []; //어차피 첫 true값을 반환하기 때문에 배열 안받아도 된다람쥐. 선생님 풀이 참조
  for (const user of userList) {
    if (callback(user)) {
      mappedArray.push(user); 
    }
  }
  return mappedArray[0];
}

// '서울'에 사는 첫 번째 사용자를 찾는 예시
const firstUserInSeoul = find((user) => user.address === "서울");
console.log("서울에 사는 첫 번째 사용자:", firstUserInSeoul);

function some(callback) {
  const upperSalary500 = []; // 가상의 배열을 만들어서 전체 중 한명이라도 있는지 목록을 확인해야 한드아.
  for (const user of userList) {
    console.log(callback(user)); //가상의 함수는 배열을 순회할 때 불리언값으로  나타낸다. 왜...?
    if (callback(user)) {
      upperSalary500.push(user.salary);
    }
  }
  // console.log(upperSalary500);
  if (upperSalary500.length >= 1) {
    return `true`;
  } else {
    return `false`;
  }
}
// 급여 5,000,000 이상인 사용자가 하나라도 있는지 확인하는 예시
const hasHighEarningUser = some((user) => user.salary >= 5000000);
console.log("연봉이 5,000,000 이상인 사용자가 있는가?:", hasHighEarningUser);

function every(callback) {
  const liveInSeoul = []; // 서울에 사는 사람만 배열에 쌓기
  for (const user of userList) {
    if (callback(user)) {
      liveInSeoul.push(user.address);
    }
  }
  if (liveInSeoul.length === userList.length) {
    //모든 회원의 수 = 서울에 사는 회원의 수 = 배열의 길이로 비교
    return "true";
  } else {
    return `false`;
  }
}

// 모든 사용자가 '서울'에 사는지 확인하는 예시
const allUsersInSeoul = every((user) => user.address === "서울");
console.log("모든 사용자가 서울에 사는가?:", allUsersInSeoul);


