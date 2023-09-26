function solution(my_string, num1, num2) {
    let arr = [...my_string];
    let n1= arr[num1]
    arr.splice(num1,1, arr[num2])
    arr.splice(num2,1, n1)
    return arr.join('');
}