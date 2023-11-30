let answer = [1,1];
function solution(n) {
    //1. 피보나치 수로 구성된 배열 만들기 ( )
    //2. 그중 n번째 숫자를 1234567로 나눈 나머지값 구하기.
    for(let i = 2; i<=n; i++){
        answer[i] = (answer[i-2]+ answer[i-1])%1234567
    }
    let dodong= answer[n-1]
    return dodong
}