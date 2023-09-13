function solution(my_string, is_suffix) {
    // let n = [];
    // for(let i=0; i<my_string.length; i++){
    //     n.push([...my_string].slice(i).join(''));
    // }
    // return  n.includes(is_suffix)? 1 : 0;
    
    return my_string.substr(-is_suffix.length) === is_suffix? 1: 0
}