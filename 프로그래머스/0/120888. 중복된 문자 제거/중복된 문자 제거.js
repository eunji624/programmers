function solution(my_string) {
    const setArr = new Set(my_string);
    let answer='';
    for(let i of setArr.keys()){
        answer += i
    }
    return answer;
}