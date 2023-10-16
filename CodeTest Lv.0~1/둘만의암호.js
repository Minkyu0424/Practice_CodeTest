function solution(s, skip, index) {
    let word = 'abcdefghijklmnopqrstuvwxyz'
    for(i of skip){
        word=word.replace(i, '')
    }
    s = s.split('')
    s=s.map((a)=>{
        let flag = word.indexOf(a)
        return (flag + index < word.length) ? word[flag+index] : word[(flag+index)%word.length ]
        
    })
    return(s.join(''))
}
