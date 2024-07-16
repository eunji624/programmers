function solution(my_string) {
    const arr = my_string.split('');
    const setArr = new Set(arr);
    let answer='';
    for(let i of setArr.keys()){
        answer += i
        console.log(answer)
    }
    return answer;
}