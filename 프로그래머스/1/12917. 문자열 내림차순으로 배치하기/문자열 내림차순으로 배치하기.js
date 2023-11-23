function solution(s) {
    let small = [];
    let big = [];
    let sortS = s.split('').forEach((e)=>{
        return e !== e.toLowerCase() ? big.push(e) :small.push(e)
    })
    
    let sortSmall = small.sort((a,b)=> b.localeCompare(a))
    let sortBig = big.sort((a,b)=> b.localeCompare(a))
    return [...sortSmall, ...sortBig].join('');
}