
//객체의 중첩구조
//예시 : 게시판

var articles = {
  totalCount: 25578,  //총 게시물 수
  admin: 'abc1234', //게시판 관리자 아이디
  page: 2558, //총 페이지 수
  articleList: [ // 게시물 목록
      {
          bno: 3, //글번호
          title: '가위바위보', //글제목
          writer: '김짱껨뽀',  //작성자
          content: '다덤벼 ^^', //글내용
          viewCount: 53, //조회수
          recomm: 10, //추천수
          regDate: '21-12-07' //작성일자
      }, 
      {
          bno: 2, //글번호
          title: '노는게', //글제목
          writer: '뽀로로',  //작성자
          content: '제일조와~~~', //글내용
          viewCount: 253, //조회수
          recomm: 11, //추천수
          regDate: '21-12-06' //작성일자
      }, 
      {
          bno: 1, //글번호
          title: '아멘', //글제목
          writer: '개신교신자',  //작성자
          content: '할렐루야', //글내용
          viewCount: 23, //조회수
          recomm: 5, //추천수
          regDate: '21-12-05' //작성일자
      }
  ]
};

console.log(articles.articleList.length);
console.log(articles.articleList[2].content);

console.log(`=======================`);

//모든 게시물의 작성자 이름을 전부 추출해서 반복출력하기

console.log(articles.articleList['writer']); //ubdefined
// list 안의 객체가 변수로 할당이 안되어 있어서.


for (var bbs of articles.articleList) { //배열에 변수 bbs 를 선언한다. 
  console.log(bbs.writer); 
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~")

// console.log(articles.articleList[0].bno);
// var listNumber = 'bno';
console.log(articles.articleList['bno']);
//왜 for 문을 사용해서 다시 변수이름을 설정하는 이유는 변수이름이 있어야 값을 참조할 수 있기 때문이다. 

console.log(bbs.writer); //for 문 안에서 사용하지 않으면 반복하지 않고, 맨 마지막 배열값만 참조한다. 왱..?