function solution(n, m, section) {
    let start = section[0];
    let result = 1;
  
    for (let i in section) {
      if (section[i] >= start + m) {
        result++;
        start = section[i];
      }
    }
    return result;
  }