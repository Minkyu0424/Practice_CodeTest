function solution(players, callings) {
    let ranks = {};
    let name = {};
    players.forEach((player, i) => {
      ranks[player] = i + 1;
      name[i + 1] = player;
    });
    callings.forEach((player) => {
      let loser = name[ranks[player] - 1];
      name[ranks[player]] = loser;
      name[ranks[loser]] = player;
      ranks[player] -= 1;
      ranks[loser] += 1;
    });
    return Object.values(name);
  }
  