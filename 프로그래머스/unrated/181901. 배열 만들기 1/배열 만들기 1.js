function solution(n, k) {
    let arr = [];
    while(n >= k){
        if(n%k === 0){arr.push(n)}
        n--
    }
    arr.sort((a,b)=> a-b);
    return arr;

    // var answer = [];
    // for(let i = k ; i <= n; i+=k){
    //     answer.push(i)
    // }
    // return answer;
}