const fs = require(`fs`);
const [a, b] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);
let sum = 0;

const isPrime = (n)=>{
    if (n <= 1) return false
    if (n <= 3) return true
    if (n % 2 == 0 || n % 3 == 0) return false
    for (let i = 5; i <= Math.sqrt(n); i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

const isSumEven =(n)=>{
    const arr = String(n).split('')
    const numSum = arr.reduce((sum, now)=> sum + Number(now), 0)
    if(numSum%2===0) return true
}

for(let i=a; i<=b; i++){
    isPrime(i) && isSumEven(i) && sum++
}

console.log(sum)