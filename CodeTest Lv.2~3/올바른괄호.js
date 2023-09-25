function solution(s) {
  let brakets = [];
  for (i = 0; i < s.length; i++) {
    if (s[i] === "(") { 
      brakets.push(1);
    } else { 
      if (brakets.length === 0) return false;
      brakets.pop();
    }
  }
  return brakets.length === 0 ? true : false; 
}