function solution(array) {
    let arr = new Map();
    for(let i = 0; i < array.length; i++){
      arr.set(array[i], (arr.get(array[i])||0) + 1);
    }
    let max = Math.max(...[...arr].map(v => v[1]))
    let count = [...arr].filter(v => v[1] === max).length
    return count > 1 ? -1 : [...arr].find(v => v[1] === max)[0]

    // let answer;
    // let obj = {};
    // for(let i=0; i<array.length; i++){
    //     let v=array[i];
    //     if(i>=1 && obj[v]){
    //         obj[v]++;
    //     }else{
    //         obj[v] = 1
    //     }
    // }
    // let val = Object.values(obj);
    // let key = Object.keys(obj);
    // let maxVal = Math.max(...val);
    // let minVal = Math.min(...val);
    // let index = val.indexOf(maxVal);
    // let slice = val.slice(index+1, index-1);
    // let remaxVal = slice.includes(maxVal)
    // if(val.length>1 && remaxVal){
    //     answer = -1;
    // }else{
    //     answer = key[index]
    // }
    // return parseInt(answer)
    // // return val
    // // return index
    // // return remaxVal
}