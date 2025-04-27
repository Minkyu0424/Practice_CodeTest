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
    
    for(let i=0; i<10; i++){
        const index = i.toString();
        if(x[index] && y[index]){
            let min = Math.min(x[index], y[index])
            for(let j=0; j<min; j++){
                both.push(index)
            }
        } 
    }
    if(both.length===0) return "-1"

    const result = both.sort((a,b)=>b-a).join('')
    if (result[0] === '0') return '0';
    
    return result
    
}
