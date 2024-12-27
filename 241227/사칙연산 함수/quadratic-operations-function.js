const fs = require(`fs`);
const nums = fs.readFileSync('/dev/stdin').toString().split(' ');

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
        console.log('False')
        break;
}