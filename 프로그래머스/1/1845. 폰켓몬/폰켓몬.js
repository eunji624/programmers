function solution(nums) {
    let setNums = new Set(nums);
    return Math.min(setNums.size, nums.length/2)
    
    // let way = [];
    // nums.map((e)=>{
    //     if(!way.includes(e)){
    //         way.push(e)
    //     }
    // })
    // return  Math.min(nums.length/2, way.length);
}