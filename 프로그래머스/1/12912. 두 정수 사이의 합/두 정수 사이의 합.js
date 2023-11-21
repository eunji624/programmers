function solution(a, b) {
    let answer = 0;
    // let num = Math.abs(a-b);
    [a,b] = [a,b].sort((a,b)=>a-b); 
    while(a<b){
        answer += a
        a++;
    }
    
    return answer+b;
}