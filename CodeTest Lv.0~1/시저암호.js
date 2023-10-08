function solution(s, n) {
  newArr = [];
  for (i = 0; i < s.length; i++) {
    let asc = s[i].charCodeAt();
    if (s[i] === " ") newArr.push(" ");
    else if (asc >= 97 && asc + n > 122) {
      newArr.push(String.fromCharCode(asc + n - 26));
    } else if (asc <= 90 && asc + n > 90) {
      newArr.push(String.fromCharCode(asc + n - 26));
    } else {
      newArr.push(String.fromCharCode(asc + n));
    }
  }
  return newArr.join("");
}
