function solution(my_string) {
    // let str = ''
    // for(let i=0; i<my_string.length; i++){
    //     let a = my_string[i]
    //     if(a.toUpperCase() === a){
    //         str+= a.toLowerCase()
    //     }else {
    //         str+= a.toUpperCase()
    //     }
    // }
    // return  str
    
    var answer = '';
    for (let c of my_string){
        if(c.toUpperCase() === c){
            answer+= c.toLowerCase()
        }else {
            answer+= c.toUpperCase()
        }
    }
    return answer;
}