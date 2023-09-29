function solution(food) {
  let fArr = "";
  for (let i = 1; i < food.length; i++) {
    fArr += String(i).repeat(food[i] / 2);
  }
  return fArr + "0" + fArr.split("").reverse().join("");
}
