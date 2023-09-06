function solution(n) {
    let string = n.toString();
    let spread = [...string];
    
    let answer = 0;
    spread.forEach(function(e){
        let E = parseInt(e)
        answer = answer + E;
    })
    return answer
}