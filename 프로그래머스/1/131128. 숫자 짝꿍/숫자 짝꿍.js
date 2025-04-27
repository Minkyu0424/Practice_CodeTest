function solution(X, Y) {
    const x = {};
    const y = {};
    const both = [];
    
    X.split('').forEach((num) => {
        x[num] = (x[num] || 0) + 1;
    });

    Y.split('').forEach((num) => {
        y[num] = (y[num] || 0) + 1;
    });

    for (let i = 0; i < 10; i++) {
        const strI = i.toString(); // 숫자 i를 문자열로 바꿔서 사용
        if (x[strI] && y[strI]) {
            let min = Math.min(x[strI], y[strI]);
            for (let j = 0; j < min; j++) {
                both.push(strI); // 문자열로 저장
            }
        }
    }

    if (both.length === 0) return "-1";
    const result = both.sort((a, b) => b - a).join('');
    
    // 만약 결과가 모두 '0'일 경우 '0'을 반환
    if (result[0] === '0') return '0';

    return result;
}