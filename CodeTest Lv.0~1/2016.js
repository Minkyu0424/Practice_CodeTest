function solution(a, b) {
  let day = 4;
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const mDay = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  if (a > 1) 
  for (i = 0; i < a - 1; i++) day += mDay[i];
  day += b;
  return week[day % 7];
}
