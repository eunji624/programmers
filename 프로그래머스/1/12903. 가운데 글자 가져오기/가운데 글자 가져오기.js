function solution(s) {
    let c = Math.floor(s.length/2);
    return s.length%2 === 0?  s.slice(c-1, c+1) : s.slice(c, c+1);
}