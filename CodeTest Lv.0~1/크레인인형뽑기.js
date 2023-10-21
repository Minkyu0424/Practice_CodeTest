function solution(board, moves) {
    let basket = [];
    let same = 0;
    for (line of moves) {
      for (floor of board) {
        if (floor[line - 1] != 0) {
          basket.push(floor[line - 1]);
          floor.splice(line - 1, 1, 0);
          break;
        }
      }
      if (basket.length > 1 && basket[basket.length-2] === basket[basket.length - 1]){
          basket.pop();
          basket.pop();
          same++;
      }
    }
    console.log(same*2);
  }
  
  