function solution(s) {

    const isRealNum = s.split('').reduce((acc, cur)=> +acc + +cur,0) 
    return (s.length === 4 || s.length === 6) 
        ? (+s >= 0) 
            ?   s.split('').reduce((acc, cur)=> +acc + +cur,0) >=0 
                ?true
                :false
            : false 
        : false;
}