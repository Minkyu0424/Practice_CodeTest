function solution(s) {
  let brakets = [];
  for (i = 0; i < s.length; i++) { //문자열 전체 순회
    if (s[i] === "(") { //'('를 발견하면 brakets라는 배열에 1을 삽입
      brakets.push(1);
    } else { // ')'일 경우 brakets에서 item하나를 pop, 만일 brakets가 빈 배열인 경우 잘못된 괄호이기에 false 반환
      if (brakets.length === 0) return false;
      brakets.pop();
    }
  }
  return brakets.length === 0 ? true : false; //주어진 문자열을 규칙에 맞게 순회 한 후, '('가 남아있는 경우 false를 반환
}
// 처음엔 for문을 통해 문자열을 순회할 때, i of s를 사용했다가 런타임 초과가 발생해 필요없는 문구 제거,
// 삼항연산자 사용 등 방법을 사용해도 안되기에 for문을 지금 코드와 같이 index를 순회하는 방식으로 바꾸었는데
// 런타임 초과가 발생하지 않았다.