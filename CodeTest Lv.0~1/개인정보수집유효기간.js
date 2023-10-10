function solution(today, terms, privacies) {

  const answer = [];
  const rules = {};

  for (const term of terms) {
    const [type, months] = term.split(" "); 
    rules[type] = +months; 
  }

  const dateChange = (date) => Math.floor(date.split(".").join(""));

  for (let i = 0; i < terms.length; i++) {
    let rule = terms[i].split(" ");
    rules.push(...rule);
  }

  for (let j = 0; j < privacies.length; j++) {
    let date = dateChange(privacies[j])[0].split(".").join("");
    const index = rules.indexOf(privacies[j].split(" ")[1]);
    const rule = rules[index + 1];
    let month = rule * 100;
    date = date + Math.floor(month / 1200) * 10000 + (month % 1200);
    if (date % 10000 >= 1300) {
      date = date - 1200 + 10000;
    }
    if (date % 10000 < 101) date += 1200 - 10000;
    if (date - (date % 10) === 1) date = date - 100 + 27;
    else date--;
    if (dateChange(today) > date) answer.push(j + 1);
  }
  return answer;
}
