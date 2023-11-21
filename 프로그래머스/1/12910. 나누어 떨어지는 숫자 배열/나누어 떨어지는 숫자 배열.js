function solution(arr, divisor) {
    let newArr = arr.filter((e)=> e%divisor ===0);
    return newArr.length === 0 ? [-1] : newArr.sort((a,b)=> a-b)
}