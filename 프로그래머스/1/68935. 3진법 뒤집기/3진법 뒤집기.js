function solution(n) {
    let str = "";
    while (n > 0){
        str += n%3
        n = Math.floor(n/3)
    }
    return parseInt(str,'3')
    // const arr = str.split('').map((e)=> Number(e))
    // const answer = arr.reduce((acc, cur, i) => {
    //     const num = str.length-i-1
    //     // console.log(num)
    //     return cur += acc* 3^num
    // },0)
    // return answer
}