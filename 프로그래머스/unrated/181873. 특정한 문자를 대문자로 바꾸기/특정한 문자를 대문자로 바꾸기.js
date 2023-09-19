function solution(my_string, alp) {
    // let str = [... my_string]
    // str.forEach((e, i)=>{
    //     if(e === alp){
    //         str[i] =str[i].toUpperCase();
    //     }
    // })
    // return str.join('').toString();
    return my_string.replaceAll(alp, alp.toUpperCase())
}