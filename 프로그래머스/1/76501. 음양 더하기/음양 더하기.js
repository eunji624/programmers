function solution (s, ab) {
    var answer = 0;
    
    for(let i = 0; i < ab.length; i++){
        if (ab[i] === true){
            answer = answer +s[i];
        }
        if (ab[i] === false){
            answer = answer -s[i];
        }
    }
    return answer;
}


