function solution(keymap, targets) {

    for(word of targets){
        let index =[];
        let num = 0;
        for(i of word){
            for(j of keymap){
                if(j.indexOf(i)!=-1) index.push(j.indexOf(i))
            }
            console.log(index);
        }
    }
}
solution(["ABACD", "BCEFD"], ["ABCD","AABB"])
