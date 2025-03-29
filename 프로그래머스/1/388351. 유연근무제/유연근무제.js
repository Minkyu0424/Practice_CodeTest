function solution(schedules, timelogs, startday) {
    let answer = 0;
    
    for(let i in schedules){
        let day = startday - 1;  // 시작 요일을 0부터 맞춤
        let deadline = schedules[i] + 10;

        // 출근 마감 시간 변환
        if (deadline % 100 >= 60) deadline += 40;

        let allOnTime = true;  // 모든 평일 정상 출근 여부

        for(let log of timelogs[i]){
            ++day;  // 요일 증가

            if (day % 7 === 0 || day % 7 === 6) continue; // 주말은 무시

            if (log > deadline) {
                allOnTime = false;  // 지각했으므로 상품 제외
                break;  // 더 이상 확인할 필요 없음
            }
        }

        if (allOnTime) ++answer;  // 모든 평일 정상 출근한 경우 카운트
    }

    return answer;
}