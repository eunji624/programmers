function solution(n) {
//     var answer = '수박';
//     let x = Math.ceil(n/2);
//     let str = answer.repeat(x)
//     return x*2 > n ? str.substr(0, n) : str

    return '수박'.repeat(n/2+1).substr(0, n);
}