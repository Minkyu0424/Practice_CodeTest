function solution(s) {
    const wordArr = s.split(" ").map((word) => {
        let newWord = "";
        for (let i = 0; i < word.length; i++) {
          if (i % 2 === 0) newWord += word[i].toUpperCase();
          else newWord += word[i].toLowerCase();
        }
        return newWord;
      });
      console.log(wordArr.join(' '));
  }
  solution("hi minkyu yo")
  