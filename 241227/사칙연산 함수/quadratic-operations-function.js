const fs = require(`fs`);
const nums = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const num1 = parseInt(nums[0], 10);
const num2 = parseInt(nums[2], 10);

switch (nums[1]) {
    case '+':
        console.log(`${nums.join(' ')} = ${num1 + num2}`);
        break;
    case '-':
        console.log(`${nums.join(' ')} = ${num1 - num2}`);
        break;
    case '*':
        console.log(`${nums.join(' ')} = ${num1 * num2}`);
        break;
    case '/':
        console.log(`${nums.join(' ')} = ${Math.floor(num1 / num2)}`);
        break;
    default:
        console.log('False');
        break;
}