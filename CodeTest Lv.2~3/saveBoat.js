// 문제 url : https://school.programmers.co.kr/learn/courses/30/lessons/42885
function solution(people, limit) {
  people.sort((a, b) => a - b); //사람 배열 무게순으로 정렬
  let boat = 0; //필요 보트 수 초기화
  while (people.length > 0) { 
    if (people.length == 1) { //사람 배열에 1명이 남을경우 무조건 혼자탐 -> 보트수 +1 하고 종료
      boat += 1;
      break;
    }
    let r = people.length; //가독성을 위한 변수 r
    for (i = 0; i < r - 1; i++) { //두 명씩 무게 비교 후 배에 태우기에 최대 지점은 마지막에서 두번째 인덱스 까지
      if (people[0] + people[r - (i + 1)] <= limit) { //두 명의 무게합이 limit보다 작을경우 둘이 태울 수 있음
        boat += 1; // 둘이 타는 보트 수 +1
        people.splice(0, 1);// 둘 중 가벼운 사람 배열에서 제거
        people.splice(r - (i + 2), 1); // 위에서 하나 없어지는거 감안해서 최대 인덱스서 i+2만큼 앞의 있는 위치의 사람을 제거
        break; //while문 다시 반복
      }
      people.splice(people.length - 1, 1); //두 명이 못타는 경우 있는 사람 중 가장 무거운 사람 배열에서 제거
      boat += 1; // 보트 수 증가(둘이 탈 수 없어서 혼자타야 하기에
    }
  }
  return boat;
}
//효율성 테스트 시간 초과 : 줄일 수 있는 요소들
// 1. splice 사용하지않고 검사 범위에 변경주기
// 2. 정렬 사용하지 않기(사용하지 않은 사례 찾기)
