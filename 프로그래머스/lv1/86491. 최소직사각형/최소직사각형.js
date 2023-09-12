function solution(sizes) {
    let A = [];
    let B = [];
    sizes.map(([a,b]) => {
        let near = [a,b].sort((a,b)=> {return a-b});
        A.push(near[0]); 
        B.push(near[1]);
    })
    return  Math.max(...A) * Math.max(...B)
    
    
//     function bigsmall(arr){
//         arr.sort((a,b)=> {return b-a});
//     }
//     let frist = [];
//         second = []
//     sizes.map((a)=>{
//         bigsmall(a)
//         frist.push(a[0]);
//         second.push(a[1]);
//     })
//     bigsmall(frist);
//     bigsmall(second);

//     var answer = frist[0] * second[0];
//     return answer;
    
}
