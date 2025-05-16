function solution(bandage, health, attacks) {
    let lastTime = 0;
    let nowHealth = health;
    
    const calcHeal =(time)=>{
        return time*bandage[1] + Math.floor(time/bandage[0])*bandage[2]
    }
    
    for(let [time,attack] of attacks){
        if(nowHealth < health ){
            nowHealth = Math.min(health, nowHealth + calcHeal(time - lastTime-1))
        }
        lastTime = time;
        nowHealth -= attack;
        
        if(nowHealth<= 0) return -1;
    }
    return nowHealth;
}