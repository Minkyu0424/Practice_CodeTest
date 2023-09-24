//n을 나눴을 때 나머지가 1이되는 최소인 수 x 구하기
function solution(n) {
    for (let i = 2; i < n; i++) {if(n%i===1) return 1;
    }
}
