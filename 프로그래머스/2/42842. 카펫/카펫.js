function solution(brown, yellow) {
    const all = brown+yellow
    for(let i=3; i<brown*yellow; i++){
        const row = all/i
        const col = i
        if(all%i===0){
            if(all/i*2 + i*2 -4 === brown) return [all/i, i]
        }
    }
}