function solution(s) {
    arr = s.split('')
  if (s.length === 4 || s.length === 6) {
    for (i in arr) {
        if(isNaN(arr[i]))  return (false);
    }
    return (true);
  }
  return (false);
}
solution('a234')