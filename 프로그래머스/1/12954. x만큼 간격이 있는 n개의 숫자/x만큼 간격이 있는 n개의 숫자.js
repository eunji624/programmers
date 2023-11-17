function solution(x, n) {
    let arr = [];
    while(n>0){
        arr.push(x*n)
        n--;
    }
    return arr.reverse();
}