function solution(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    
    // 2-gram 추출 (유효한 영문 쌍만)
    const getMultiset = (str) => {
        const arr = [];
        for (let i = 0; i < str.length - 1; i++) {
            const pair = str.substr(i, 2);
            if (/^[a-z]{2}$/.test(pair)) arr.push(pair);
        }
        return arr;
    };
    
    const arr1 = getMultiset(str1);
    const arr2 = getMultiset(str2);
    
    // 빈도수 맵 생성
    const createFrequencyMap = (arr) => {
        const map = {};
        arr.forEach(item => map[item] = (map[item] || 0) + 1);
        return map;
    };
    
    const map1 = createFrequencyMap(arr1);
    const map2 = createFrequencyMap(arr2);
    
    // 교집합과 합집합 계산
    let intersection = 0;
    let union = 0;
    const allKeys = new Set([...Object.keys(map1), ...Object.keys(map2)]);
    
    allKeys.forEach(key => {
        const count1 = map1[key] || 0;
        const count2 = map2[key] || 0;
        intersection += Math.min(count1, count2);
        union += Math.max(count1, count2);
    });
    
    // 자카드 유사도 계산
    const similarity = union === 0 ? 1 : intersection / union;
    return Math.floor(similarity * 65536);
}
