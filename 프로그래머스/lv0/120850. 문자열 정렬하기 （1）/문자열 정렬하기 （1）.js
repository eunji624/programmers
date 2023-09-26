function solution(my_string) {
    // var answer = [];
    // let arr =  [...my_string]
    // arr.forEach((e, i)=> {
    //     arr[i] = Number(e)
    //     if(e>= 0){answer.push(parseInt(e))}
    // })
    // answer.sort((a,b)=>{
    //     return a-b
    // })
    // return answer
    
    let arr = Array.from(my_string).filter((a)=> a>=0);
    return arr.map((a)=>parseInt(a)).sort((a,b)=> a-b);

}