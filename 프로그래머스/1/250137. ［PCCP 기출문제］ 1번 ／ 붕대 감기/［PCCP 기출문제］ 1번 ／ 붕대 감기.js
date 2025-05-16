function solution(bandage, health, attacks) {
    const [cooldown, healPerSec, bonusHeal] = bandage;
    let lastTime = 0;
    let nowHealth = health;
    
    const calcHeal =(time)=>{
        return time * healPerSec + Math.floor(time/cooldown)*bonusHeal
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