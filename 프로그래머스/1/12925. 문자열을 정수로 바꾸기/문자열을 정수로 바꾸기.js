function solution(s) {
    if(s[0]=== '-') return - + s.slice(1)
    if(s[0]=== '+') return +s.slice(1)
    return +s
}