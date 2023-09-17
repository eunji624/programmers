function solution(start, end) {
    // var answer = [];
    // let i=0;
    // while(start-i>=end){
    //     answer.push(start-i)
    //     i++;
    // }
    // return answer;
    var answer = [];
    let a = start;
    do{
        answer.push(a)
        a--
    }while( a>=end )
    return answer
}