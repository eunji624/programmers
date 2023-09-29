function solution(num, k) {
//     var answer;
//     let arr = num.toString().split('');
//     arr.map((e,i)=> {
//         if(Number(e)==k){
//             answer = i+1;
//         }else{
//             answer = -1;
//         }
//     });
//     return answer;
    
    return String(num).indexOf(k)+1 || -1
}