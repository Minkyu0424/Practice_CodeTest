function solution(n)
{
    var ans = n;
    let cnt =0;
    while(ans!==0){
        if (ans%2===0){
            ans/=2
        }else{
            ans--
            cnt++
        }
    }
    return cnt;
}