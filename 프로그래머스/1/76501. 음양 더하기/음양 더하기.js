function solution (s, ab) {
    var answer = 0;
    
    for(let i = 0; i < ab.length; i++){
        console.log(s[i]);
        if (ab[i] === true){
            answer = answer +s[i];
            console.log(ab[i]);
        }
        if (ab[i] === false){
            answer = answer -s[i];
            console.log(answer);
        }
    }
    return answer;
}


