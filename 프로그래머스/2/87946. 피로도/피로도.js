function solution(k, dungeons) {
    function getPermutations(arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]);

    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        const permutations = getPermutations(rest, selectNumber - 1);
        const attached = permutations.map((perm) => [fixed, ...perm]);
        results.push(...attached);
    });

    return results;
}
    
    const permutations = getPermutations(dungeons, dungeons.length);
    let maxCount = 0;

    for (let order of permutations) {
        let tired = k;
        let count = 0;
        for (let [min, cost] of order) {
            if (tired >= min) {
                tired -= cost;
                count++;
            } else {
                break;
            }
        }
        maxCount = Math.max(maxCount, count);
    }

    return maxCount;
}