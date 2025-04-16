function solution(n, words) {
    const newArr = [];
    
    for(let i in words){
        const word = words[i];
        const prev = newArr[newArr.length - 1];
        
        if(newArr.includes(word)){
            return [i % n + 1, Math.ceil((newArr.length+1) / n) ]
        }
        
        if( i>0 && prev.slice(-1) !== word[0]){
            return [i % n + 1, Math.ceil((newArr.length+1) / n) ]
        }
        newArr.push(word)
    }
    return[0,0]
}