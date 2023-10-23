function solution(n) {
    let N = String(n).split("")
    let Num = N.map((e)=> Number(e))
    let answer =  Num.reverse();
    return answer;
}