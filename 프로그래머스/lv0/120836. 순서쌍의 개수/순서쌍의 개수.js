function solution(n) {
    var answer = 0;

    for(let x=1; x<n+1; x++){
        if(n%x ===0){
            answer++
        }
    };
    return answer;
}