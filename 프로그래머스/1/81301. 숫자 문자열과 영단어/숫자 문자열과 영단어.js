// function solution(s) {
//     let answer  ='';
    // const alpa = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//     // for(let i=0; i<s.length; i++){
//         alpa.forEach((alpa, i)=>{
//             let test = s.indexOf(alpa);
//             console.log('test',test, s[test])
//             if(test !== -1 ){
//                 answer += i      
//             }else{
//                 answer += s
//             }
//             // console.log(i, 'answer',answer)
//         })
//     // }
//     console.log( 'answer',answer)
//     const answerIS = answer.split('').filter((e)=>Number(e)).join('');
//     return parseInt(answerIS)
// }

function solution(s) {
  const alpa = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

  var answer = s;
  for (let i = 0; i < alpa.length; i++) {
    let arr = answer.split(alpa[i]); //split을 하면 해당 대상은 사라지고!!!! 그걸 기준으로 나뉜 배열이 탄생.
    answer = arr.join(i); //괄호안에 것을 기준으로 해서 모든 배열의 요소를붙임.
  }
  return Number(answer);
    
}