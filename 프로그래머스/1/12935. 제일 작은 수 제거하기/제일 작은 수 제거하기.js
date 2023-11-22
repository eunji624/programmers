function solution(arr) {
    let min = Math.min(...arr)
    if(arr.length >1){
        return arr.filter((e, i)=>{
            if(i!== arr.indexOf(min)){
                return e
            }
        })
    }else {
        return [-1]
    } 
}