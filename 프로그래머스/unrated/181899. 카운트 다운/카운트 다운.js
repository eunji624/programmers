function solution(start, end) {
    // var answer = [];
    // let i=0;
    // while(start-i>=end){
    //     answer.push(start-i)
    //     i++;
    // }
    // return answer;
    var answer = [];
    do{
        answer.push(start)
        start--
    }while( start >=end )
    return answer
}