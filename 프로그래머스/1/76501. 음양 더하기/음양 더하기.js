function solution (ab, s) {
    var answer = 0;
    console.log(ab)
    for(let i = 0; i < s.length; i++){
        if (s[i] === true){
            answer = answer +ab[i];
        }
        if (s[i] === false){
            answer = answer -ab[i];
        }
    }
    return answer;
}


