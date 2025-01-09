const fs = require('fs');
let [cnt, prices] = fs.readFileSync(0).toString().trim().split('\n');

let dif =[];
prices = prices.split(' ').map(Number).reverse()

for(let i=0; i<cnt-2; i++){
    for(let j=i+1; j<cnt-1; j++){
        if(prices[i]-prices[j] > 0 ) dif.push(prices[i]-prices[j]);
    }
}

dif.sort((a,b)=> b-a);

console.log(dif[0])