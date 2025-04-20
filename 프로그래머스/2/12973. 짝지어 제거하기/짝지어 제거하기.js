function solution(s)
{
    const stack = [];
    for(let i of s){
        if(stack[0]===undefined || i !== stack[stack.length-1]){
            stack.push(i)
        }else{
            stack.pop()
        }
        
    }
    return stack.length === 0 ? 1 : 0
}