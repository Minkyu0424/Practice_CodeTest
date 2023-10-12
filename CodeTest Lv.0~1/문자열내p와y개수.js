function solution(s) {
  let cnt = 0;
  s.split("").map((a) => {
    if (a === "P" || a ==="p") {
      cnt++;
    } else if (a === "y" ||a === "Y") cnt--;
  });
  return (cnt === 0 ? true : false);
}
