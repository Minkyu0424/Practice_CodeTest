function solution(N, stages) {
    let state = stages.length;
    let testArr = [];
    for (i = 1; i <= N; i++) {
      let test = {};
      let fail = 0;
      stages.forEach((user) => {
        if (user <= i && user > i - 1) fail++;
      });
      test['num'] = i - 1;
      test['failRate'] = fail / state;
      testArr.push(test);
      state -= fail;
    }
    testArr.sort((a,b)=> b.failRate-a.failRate)
    answer = testArr.map((a)=>{
      return a.num+1
    })
   return answer
  }