function solution(k, m, score) {
    let answer=[];
    const box = Math.floor(score.length/m)
    const sort =score.sort((a,b)=>b-a)
    for(let i=0; i<box; i++){
        const a= i*m
        const sliceSort =sort.slice(a, a+m);
        let min = sliceSort[m-1];
        answer.push(min*m)
    }
    return answer.reduce((cur, acu)=>  cur+acu,0)
}