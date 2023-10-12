function solution(s){
    let small = s.toLowerCase().split('');
    let p = small.filter((e)=> e== 'p').length ;
    let y = small.filter((e)=> e== 'y').length;

    return  p===y?true : false;
}