function solution(numbers, hand) {
  const abs=(a) => Math.abs(a);
  handArr =[]
  let left = 0;
  let right = 0;
  numbers.forEach((num) => {
    if (num === 1 || num === 4 || num === 7){
        left = num;
        handArr.push('l');
    } 
    else if (num === 3 || num === 6 || num === 9){
        right = num;
        handArr.push('r')
    } 
    else{
        if(hand==="left") {
            abs(left-num) <= abs(right-num) ? handArr.push('l') : handArr.push('r')
        }else{
            abs(left-num) >= abs(right-num) ? handArr.push('r') : handArr.push('l')
        }
    }
  });
  console.log(handArr);
}
solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");
