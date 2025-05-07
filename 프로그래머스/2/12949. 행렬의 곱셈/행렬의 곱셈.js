function solution(arr1, arr2) {
    const m = arr1.length;     
    const k = arr1[0].length;    
    const n = arr2[0].length;   

    const answer = Array.from({ length: m }, () => Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            for (let l = 0; l < k; l++) {
                answer[i][j] += arr1[i][l] * arr2[l][j];
            }
        }
    }

    return answer;
}