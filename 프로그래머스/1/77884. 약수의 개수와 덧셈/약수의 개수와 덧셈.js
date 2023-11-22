function solution(left, right) {
    let arr = [];
    let m = right-left+1;
    for(let i=0; i<m; i++){
        let sarr = [];
        for(let li=1; li<left+1; li++){
            if(left%li===0){sarr.push(li)}
        }
        left ++;
        arr.push(sarr)
    }
    let newval = 0
    arr.forEach((e)=>{
        if(e.length%2 !==0){
            newval-=Math.max(...e)
        }else {
            newval+=Math.max(...e)
        }
    })
    return newval
}