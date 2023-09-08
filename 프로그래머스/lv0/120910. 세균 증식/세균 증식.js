function solution(n, t) {
    let a = 0;
    for(let i=1; i< t+1; i++){
        if(a !==0){
            a = a*2;
        }else {
            a = n*2
        }
    }
    return a
    // while (t-- > 0) n*=2;
    // return n;
    // return n<<t
}