function solution(numbers, hand) {
    let answer = '';
    let left = 10;  
    let right = 12; 

    const getDistance = (from, to) => {
        if (to === 0) to = 11;
        if (from === 0) from = 11;
        const [fx, fy] = [Math.floor((from - 1) / 3), (from - 1) % 3];
        const [tx, ty] = [Math.floor((to - 1) / 3), (to - 1) % 3];
        return Math.abs(fx - tx) + Math.abs(fy - ty);
    }

    for (let num of numbers) {
        if (num % 3 === 1) { 
            answer += 'L';
            left = num;
        } else if (num % 3 === 0 && num !== 0) { 
            answer += 'R';
            right = num;
        } else { 
            const leftDist = getDistance(left, num);
            const rightDist = getDistance(right, num);

            if (leftDist < rightDist) {
                answer += 'L';
                left = num;
            } else if (rightDist < leftDist) {
                answer += 'R';
                right = num;
            } else {
                if (hand === 'left') {
                    answer += 'L';
                    left = num;
                } else {
                    answer += 'R';
                    right = num;
                }
            }
        }
    }

    return answer;
}