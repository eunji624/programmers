function solution(n) {
    // let b = 0;
    // for(let a = 0; a <= n; a++){
    //     if(a%2 === 0){
    //         b = b + a 
    //     };
    // };
    // // result = b;
    // return b;
    
    let answer = 0;
    while (n > 0) {
        if(n%2===0){
            answer+=n
        }
        n--
    }
    return answer
}