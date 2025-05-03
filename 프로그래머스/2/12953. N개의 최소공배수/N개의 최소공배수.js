function solution(arr) {
    const getGcd=(a,b)=>{
        while(b!=0){
            [a,b] = [b, a%b]
        }
        return a;
    }
    
    const getLcm=(a,b)=>{
        return a*b / getGcd(a,b)
    }
    
    
    return arr.reduce((acc, num) => getLcm(acc, num));

}