function solution(nums) {
    let way = [];
    nums.map((e)=>{
        if(!way.includes(e)){
            way.push(e)
        }
    })
    return  Math.min(nums.length/2, way.length);
}