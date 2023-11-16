function solution(n) {
    let str = "";
    while (n > 0){
        str += n%3
        n = Math.floor(n/3)
    }
    const arr = str.split('').map((e)=> Number(e))
    let answer =0;
    arr.map((e, i) => {
        const num = arr.length-i-1;
        if(e){
            answer+= e*(3**num)
        }
    })
    return answer
}