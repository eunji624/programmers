function solution(array) {
    let arr = new Map();
    for(let i=0; i<array.length; i++){
        arr.set(array[i], (arr.get(array[i]) || 0)+1); 
    }
    let max = Math.max(...[...arr].map((a)=>{return a[1]}))
    let count = [...arr].filter((a)=>{return a[1] ===max}).length
    if(count >1){
        return -1 
    }else{
        return count > 1 ? -1 : [...arr].find((v) => {return v[1] === max})[0];
    };
}