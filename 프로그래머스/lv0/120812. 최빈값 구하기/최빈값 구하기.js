function solution(array) {
    // let arr = new Map();
    // for(let i=0; i<array.length; i++){
    //     arr.set(array[i], (arr.get(array[i]) || 0)+1); 
    // }
    // let max = Math.max(...[...arr].map(a=>a[1]))
    // let count = [...arr].filter(a=> a[1] ===max).length
    // if(count >1){
    //     return -1 
    // }else{
    //     return  [...arr].find(v=> v[1] === max)[0];
    // };


    const obj = {};
    let val = 0;
    let key = 0;
    
    for(let e of array){
        obj[e]===undefined? obj[e] = 1 : obj[e]++
        
        if(obj[e]>val){
            val = obj[e];
            key = e;
        }else if(obj[e] === val && e!==key ){
            key = -1;
        }
    }
    return key;

}