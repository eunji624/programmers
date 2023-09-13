function solution(num_list) {
    // var answer = 1;
    // if(num_list.length >10){
    //     num_list.forEach(a=> answer+=a)
    //     return answer -1
    // }else{
    //     num_list.forEach(a=> answer = answer * a)
    //     return answer;
    // }
    
    return num_list.reduce((acu, e)=> {return num_list.length>10? acu+e : acu*e})


}