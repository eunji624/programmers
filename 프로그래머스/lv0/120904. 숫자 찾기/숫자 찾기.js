function solution(num, k) {
//     var answer = '';
//     let arr = [...String(num)];
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]==String(k)&& answer <1){
//             answer = i+1;
//         }else if(arr[i] ==String(k) && answer >0){
            
//         }else if (arr[i]!==String(k) && answer <1){
//             answer = -1;
//         }
//     }
        
//     return answer;
    let index = String(num).indexOf(k);
    return index>-1? index+1 : -1
}