function solution(nums) {
    let way = [];
    nums.map((e)=>{
        if(!way.includes(e)){
            way.push(e)
        }
    })
    let len = nums.length/2
    let waylen = way.length
    console.log(len, waylen)
    let newArr = [len, waylen]
    var answer = Math.min(...newArr);
    return answer;
}