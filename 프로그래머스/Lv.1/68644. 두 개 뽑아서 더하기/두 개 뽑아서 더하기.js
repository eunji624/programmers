function solution(numbers) {
    let answer = [];
    const new_numbers = numbers.sort((a,b)=>a-b)
    new_numbers.forEach((e,ei)=>{
        new_numbers.forEach((a,ai)=>{
            if(ei !== ai){
                if(!answer.includes(a+e)){
                    return answer.push(a+e)
                }
            }
        })
    })
    answer.sort((a,b)=>a-b)
    console.log(answer)
    return answer
}