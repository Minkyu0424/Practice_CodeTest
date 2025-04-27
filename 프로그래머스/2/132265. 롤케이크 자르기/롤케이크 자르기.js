function solution(topping) {
    let answer = 0;
    const front = new Map();
    const back = new Map();
    
    for (const t of topping) {
        back.set(t, (back.get(t) || 0) + 1);
    }

    for (let i = 0; i < topping.length - 1; i++) {
        const t = topping[i];
        
        front.set(t, (front.get(t) || 0) + 1);
        
        if (back.get(t) === 1) {
            back.delete(t);
        } else {
            back.set(t, back.get(t) - 1);
        }
        
        if (front.size === back.size) {
            answer++;
        }
    }

    return answer;
}