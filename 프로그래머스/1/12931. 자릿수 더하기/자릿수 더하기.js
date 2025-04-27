function solution(n)
{
    const numArr = n.toString().split('').map(Number);
    return numArr.reduce((acc, n)=>{
        return acc+n;
    } ,0)
}