function solution(arr){
    let answer=[]
    arr.forEach((e,i)=>{
        if(i!==0 && e!== arr[i-1]){
           answer.push(arr[i-1])
        }
    })
    answer.push(arr[arr.length-1])
    return answer
}