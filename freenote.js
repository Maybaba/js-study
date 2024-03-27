
const solution = function (n, t) {
  if ((n >= 1 && n <= 10) && (t >= 1 && t <= 15)) {
      let parasite = n;
      for (let i = 1; i <= t; i++) {
          parasite *= 2;
          }   
          console.log(solution(10, 3));
       return parasite;    
      } 
  };

  console.log(solution(10, 3));
