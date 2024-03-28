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
    address: "서울",
    hobbys: ["독서", "테니스"],
    salary: 90012000,
    age: 42,
  },
];

//최연소 회원 구하기
function minAge () {
  let ageArray = [];
  for(const user of userList) { //배열의 변수명 추출하여 배열에서 일치하는 게 있는지 체크
    if (minAge(age))
  }
}

const getMinAge = function minAge(age) {
  
};


//최소 급여 구하기
function minSalary () {

}

const getMinSalary = minSalary() {

};





// //퀴즈 풀이, 자리뺏기 알고리즘
function min(userList, property) {
  // userList가 비어있으면 null을 반환
  if (userList.length === 0) {
    return null;
  }

  let minValueUser = userList[0]; // 최소값을 가진 객체를 첫 번째 사용자로 초기화

  // userList를 순회하면서 주어진 속성의 최소값을 찾음
  for (const user of userList) {
    if (user[property] < minValueUser[property]) { //문자열의 키값은 점으로 참조할 수 없으므로 대괄호 참조를 통해서 키의 값을 참조한다. 
      minValueUser = user;
    }
  }

  return minValueUser;
}


function find(callback) {
  for (const user of userList) {
    if (callback(user)) {
      return user;
    }
  }
  return undefined;
}

function some(callback) {
  for (const user of userList) {
    if (callback(user)) {
      return true;
    }
  }
  return false;
}

function every(callback) {
  for (const user of userList) {
    if (!callback(user)) {
      return false;
    }
  }
  return true;
}

