function solution(n) {
    let x=1;
    while(x<= n){
        if(n%x===1){
            return x;
        }
        x++;
    }    
    
//     const sqrt = Math.sqrt(n-1);
//     console.log(sqrt)
//     const jungsoo = parseInt(sqrt)
//     console.log(sqrt-jungsoo)
    // return sqrt-jungsoo ? n-1 : jungsoo;
}