// function solution(a, b) {
//     let newArr = [];
//     a.forEach((ae, ai)=>{
//         b.forEach((be, bi)=> {
//             if(ai=== bi){
//                newArr.push(ae*be)
//             }
//         })
//     })
//     return newArr.reduce((acc,cur)=>acc+cur,0)
// }


function solution(a, b) {    
    return a.reduce((acc, cur, i)=> {
        return acc += cur * b[i]
    }, 0)
}