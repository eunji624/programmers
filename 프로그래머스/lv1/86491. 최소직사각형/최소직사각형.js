function solution(sizes) {
    let frist = [];
    let second=[];
    sizes.map((a)=>{
        a.sort((a,b)=>{
           return a-b
        })
        frist.push(a[0]);
        second.push(a[1]);
    })
    frist.sort((a,b)=>{
       return b-a
    });
    second.sort((a,b)=>{
       return b-a
    });
    
    var answer = frist[0] * second[0];
    return answer;
}