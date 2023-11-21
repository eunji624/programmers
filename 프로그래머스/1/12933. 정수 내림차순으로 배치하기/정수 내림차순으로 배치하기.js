function solution(n) {
    const answer = n.toString().split("").sort().reverse().map((e)=> Number(e)).join('')
    return Number(answer);
}