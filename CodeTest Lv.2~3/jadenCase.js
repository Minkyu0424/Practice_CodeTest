// function solution(s) {
//   const words = s.trim().split(/\s+/g); //여러 공백 줄여서 합침
//   let newWords = [];
//   for (let word of words) {
//     word = word.toLowerCase();
//     if (isNaN(word[0])) {
//       word = word[0].toUpperCase() + word.slice(1);
//     }
//   console.log(word);

//     newWords.push(word);
//   }
//   console.log(newWords);


// }
// solution("   3people    unFollowed   me");

//내 해답의 문제 : 앞, 뒤 띄어쓰기에 대해서 처리를 못해 맨 앞문자를 대문자로 바꾸나, 공백들을 아예 없애는 방법임
// map과 메타문자를 사용해처리

// 해답코드
function solution(s) {
    const answer = s.split(' ').map(word => word.replace(/\w/g,(t,idx)=>{
                    // 문자열을 공백으로 구분해서 배열로 제작 후 map함수 실행 각 배열 item들에게replace함수로 
                    // 메타 문자를 통해 모든 문자들에게 다음 과 같은 함수를 실행한다
        return idx === 0 ? t.toUpperCase() : t.toLowerCase()
                    // 해당 문자의 index가 0(맨 앞)이라면 대문자로 변경, 그 외의 위치의 문자는 소문자로 변경
    })).join(' ')
                    // 변환을 마친 배열을 다시 문자열로 합치기
    return answer
}
solution("3People jumping on   wall")
