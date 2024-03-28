const traders = [
  {
    trader: {
      name: "김철수", //traders[0].trader.name
      city: "대전",
    },
    year: 2023, 
    value: 500000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2022,
    value: 600000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 1200000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2023, //traders[3].year
    value: 650000,
  },
  {
    trader: {
      name: "뽀로로",
      city: "부산",
    },
    year: 2023,
    value: 800000,
  },
  {
    trader: {
      name: "루피",
      city: "대전",
    },
    year: 2022,
    value: 780000,
  },
];
/* traders 배열이 있다. 
1. 배열구조 파악하기 -> 어떻게 접근하는가> 


// 연습 1: 2022년에 발생한 모든 거래를 찾아 //filtering
//   거래자 정보(이름, 도시)를 배열에 매핑해주세요 -> trader 만 추출하면 된다. 

// 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요. -> 도시 이름만 추출해서 ... 중복도 제거해서 추출해보자. 

// 연습 3: 대전에 근무하는
// 모든 거래자를 찾아 거래자정보(이름, 도시)를 배열에 매핑해주세요. -> 1번이랑 비슷함

// 연습 4: 모든 거래자의 이름을 배열에 모아주세요. -> 모든 이름을 모아보자. 중복을 제거하자. 

// 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력. -> 서울 사는 사람의 value를 더한다. 
*/

removeDuplicates(user => [...new Set(user)]);

//연습 1 
const tradeAt2022 = traders.filter( user => user.year === 2022);
console.log(tradeAt2022);
const mappedNameandCity = tradeAt2022.map( user => {
  return user.trader;
});
console.log(mappedNameandCity);

//연습 2 _ 나와 긱포긱
const mappedAllCity = traders
.map( user => {
  return user.trader.city;
})


//gpt using only higher-order function
// const mappedAllCity = traders.map(user => user.trader.city)
//                             .filter((city, index, array) => array.indexOf(city) === index);
// console.log(mappedAllCity);

//연습 3
const traderAtDaejeon = traders
.filter(user => user.trader.city === '대전')
.map(user => {
  return user.trader;
  });
  console.log(traderAtDaejeon);

//연습 4
const allUserName = traders.map (user => user.trader.name);
console.log(allUserName);

//연습 5 
let total = 0;
traders.map (user => user.value)
.forEach ( v =>  total += +v);
console.log(` 거레총액 :  ${total}`);