function solution(arr1, arr2) {
    var answer = [[]];
    for(let i =0; i<arr1.length; i++){
        if(i >0){
            answer.push([])
        }
        for(let j = 0; j<arr2[i].length; j++){
            answer[i].push(arr1[i][j]+ arr2[i][j])    
        }
    }
    return answer;
}