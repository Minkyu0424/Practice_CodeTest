arr2d = new Array(5).fill(0).map(()=>Array(5).fill(0))

for(let i=0; i<5; i++){
    for(j=0; j<5; j++){
        if(i-1<0 || j-1<0) arr2d[i][j] = 1;
        else arr2d[i][j] = arr2d[i-1][j] + arr2d[i][j-1]
    }
}

for(arr of arr2d){
    console.log(arr.join(' '))
}