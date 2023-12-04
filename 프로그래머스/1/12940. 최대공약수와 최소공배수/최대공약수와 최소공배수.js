function solution(n, m) {
    let small = [1, 1, n, m]
    let big = [n, m]
    function makeSmall(x){
        for(let i=2; i<=Math.ceil(x/2); i++){
            if(x%i ===0) {
                small.push(i)
            }else if(x%i !==0){}
        }
        return small.sort((a,b)=> b-a);
    }
    function makeBig(x){
        let i=2;
        let a;
        x===n ? a=m : a=n;
        while(new Set(big).size  ===  big.length){
            if((x*i)%a !==0){
                big.push(x*i);
                i++; 
            }else if((x*i)%a ===0){
                big.push(x*i);
                i++; 
                return big
            }
        }
    }
    makeSmall(n)
    makeSmall(m)
    if(n> m){
        makeBig(m)
        makeBig(n)
    }else{
        makeBig(n)
        makeBig(m)
    }

    let finallySmall = small.filter((e,i)=>{return e=== small[i+1]})
    return [finallySmall[0],big.sort((a,b)=>b-a)[0] ]
}