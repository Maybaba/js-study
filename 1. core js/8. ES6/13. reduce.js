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
    salary: 9700000,
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


const appleBasket = [{
  color: 'green',
  sweet: 13
},
{
  color: 'red',
  sweet: 14
},
{
  color: 'red',
  sweet: 11
},
{
  color: 'green',
  sweet: 6
},
{
  color: 'green',
  sweet: 7
},
{
  color: 'green',
  sweet: 9
},
];





//사과 바구니에 있는 사과들의 모든 당도를 합산한 결과 얻기 
// const resultTotalSweet = appleBasket
// .reduce( (totalSweet, apple) => {
//   console.log(totalSweet);
//   console.log(apple);
//   console.log(`+++++++++++++++++++++++++++++++++++++++++++++`);
//   return totalSweet + apple.sweet;
// }, 
// 0);
// console.log(`totalSweet : ${resultTotalSweet}`);

const resultTotalSweet = appleBasket.reduce((total, apple) => total + apple.sweet, 0);


//배열고차함수 reduce : 배열의 각 요소들을 주어진 콜백에 맞게 합산, 누적하여 
//                      하나의 결과값을 반환하는 함수이다. 

//reduce에 들어가는 callack
//callbaxk(accumulatorm currentValue)
//ACCUMULATOR : 어떤 데이터를 계속 쌓아가는 변수
//currentValue : 현재 루프회차에서 사용할 데이터
//reduce는 반복을 실행할 때마다 currentValue를 accumulator에 누적함
const result =[10, 20, 30, 40, 50, 60].reduce( (a, b) => {
  console.log(a);
  // console.log(b);
  console.log(`${a} + ${b} = ${a + b}`);
  console.log(`=======================`);
  return a + b; // 두 수를 합한 값이 다음의 a 자리에 이동한다. 
  // return a * b;
  // console.log(`hello`);
},
//`initial value`
0); //추가파라미터 100

//reduce의 콜백함수 다음 파라미터는 initialValue를 의미하며
//반복문의 ccumulator 시작값을 의미함
//따라서 0을 시작값으로 두고 return a + b; 하면
// 0 + 1 + 2 + 3 + 4 + 5 + 6
//시작값을 없애면 accumulator의 시작값이 0번인덱스로 지정되며
//1 + 2 + 3 + 4 + 5 + 6
 
console.log(`result : ${result}`);


//reduce의 내부 형태
function myReduce(array, callback, initialValue) {
  //어떤 값을 누적할 변수
  let accumulator = initialValue === undefined ? array[0] : initialValue;
  const startIdx = initialValue === undefined ? 1 : 0;
  for (let i = startIdx; i <= array.length; i++ ) {
    accumulator = callback(accumulator, array[i]);
  }
  return accumulator;
}

//reduce로 재미있는 사과 색별로 사과 개수 카운트하기
console.log(`==============================`);
const countBycolor = appleBasket.reduce((count, apple) => {
  // console.log(a);
  // // console.log(b);
  // console.log(`===========================`);
  // a[b.color] = b.sweet; //새로운 키 객체에 추가하기 
  if(apple.color in count) {
    count[apple.color]++;
  } else {
    count[apple.color] = 1;
  }
  return count;
},  {});

console.log(countBycolor);