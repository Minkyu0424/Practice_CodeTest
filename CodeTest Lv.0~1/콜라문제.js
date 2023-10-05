function solution(a, b, n) {
  let bottle = n;
  let newCoke = 0;
  while (bottle >= a) {
    let bonus = Math.floor(bottle / a) * b;
    bottle = bottle % a;
    bottle += bonus;
    newCoke += bonus;
  }
  return newCoke;
}
