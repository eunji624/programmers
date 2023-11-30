function solution(t, p) {
    const num = p.length;
    let arr = []
    for(let i=0; i< t.length-num+1; i++){
        let slice = t.slice(0+i, num+i);
        arr.push(slice);
    }

    return arr.filter((e)=>{
        if(+e <= +p ) return e
    }).length
}