function solution(n) {
    return (n%2)===1 ? ("수박".repeat(n/2))+"수" : "수박".repeat(n/2)
}
// 입력횟수를 2로 나눈 몫 만큼 반복하고 홀수일 경우엔 끝에 "박"을 추가
s