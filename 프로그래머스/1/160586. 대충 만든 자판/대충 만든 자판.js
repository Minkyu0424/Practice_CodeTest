function solution(keymap, targets) {
    const charToMinPress = {};

    // 1. 문자별 최소 입력 횟수 계산
    keymap.forEach(key => {
        for (let i = 0; i < key.length; i++) {
            const char = key[i];
            const pressCount = i + 1;
            if (!charToMinPress[char] || charToMinPress[char] > pressCount) {
                charToMinPress[char] = pressCount;
            }
        }
    });

    const result = [];

    // 2. 각 target 문자열 처리
    for (let word of targets) {
        let totalPress = 0;
        let possible = true;

        for (let ch of word) {
            if (charToMinPress[ch]) {
                totalPress += charToMinPress[ch];
            } else {
                possible = false;
                break;
            }
        }

        result.push(possible ? totalPress : -1);
    }

    return result;
}