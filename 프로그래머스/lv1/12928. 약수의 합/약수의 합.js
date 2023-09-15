// function solution(n) {
//     let arr=0;
//     for(let i=1; i<n+1; i++){
//         if(n%i ===0){arr+=i}
//     }
//     return arr
// }

function solution(n, a=0, b=0) {
    return n<=a/2?b:solution(n,a+1,b+=n%a?0:a);
}