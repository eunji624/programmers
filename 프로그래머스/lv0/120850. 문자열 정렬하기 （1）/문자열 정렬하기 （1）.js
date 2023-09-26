function solution(my_string) {
    var answer = [];
    let arr =  [...my_string]
    arr.forEach((e, i)=> {
        arr[i] = Number(e)
        if(e>= 0){answer.push(parseInt(e))}
    })
    answer.sort((a,b)=>{
        return a-b
    })
    return answer
    
}