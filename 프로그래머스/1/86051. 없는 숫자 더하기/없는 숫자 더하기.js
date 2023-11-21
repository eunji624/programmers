function solution(numbers) {
    let arr = [0,1,2,3,4,5,6,7,8,9];
    let filterArr = arr.filter((e)=> {
        return !numbers.includes(e)             
    });
    return filterArr.reduce((acc, cur)=> acc+cur, 0)
}