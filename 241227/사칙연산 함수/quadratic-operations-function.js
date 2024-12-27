const fs = require(`fs`);
const nums = fs.readFileSync('/dev/stdin').toString().split(' ');
const calcs = '+-*/'

if(calcs.includes(nums[1])){
    switch (nums[1]) {
    case '+':
        console.log(`${nums.join(' ')} = ${nums[0] + nums[2]}`);
        break;
    case '-':
        console.log(`${nums.join(' ')} = ${nums[0] - nums[2]}`);
        break;
    case '*':
        console.log(`${nums.join(' ')} = ${nums[0] * nums[2]}`);
        break;
    case '/':
        console.log(`${nums.join(' ')} = ${MAth.floor(nums[0] / nums[2])}`);
        break;
    default:
        console.log('Invalid operation');
        break;
}
}else{
        console.log('False')
}