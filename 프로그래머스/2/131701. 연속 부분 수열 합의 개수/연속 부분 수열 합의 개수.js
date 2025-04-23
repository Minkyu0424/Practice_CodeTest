function solution(elements) {
    const arr = []
    const newArr = elements.concat(elements)
    const sums = new Set();
    const len = elements.length
    
    for(let length =1; length <=len; length++){
        let sum = 0;
        // 초기 윈도우 합
        for (let i = 0; i < length; i++) sum += newArr[i];
        sums.add(sum);

        // 슬라이딩 윈도우
        for (let start = 1; start < len; start++) {
            sum = sum - newArr[start - 1] + newArr[start + length - 1];
            sums.add(sum);
        }
    }
    return sums.size
}