function solution(numbers) {
    // let answer = 0;
//     let c = numbers.map(p => a += p)
//     return c[numbers.length-1]/numbers.length;
    
    // for(b of numbers){
    //     answer += b
    // }
    // return answer / numbers.length;
    
    return numbers.reduce((acc, cur)=> acc + cur,0)/numbers.length
}