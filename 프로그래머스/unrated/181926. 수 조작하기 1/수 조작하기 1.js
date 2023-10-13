let obj = {
    w : (n)=> n+1,
    s : (n)=> n-1,
    d : (n)=> n+10,
    a : (n)=> n-10,
}
function solution(n, control){
    return [...control].reduce((acc, cur)=> obj[cur](acc),n)
}

// function solution(n, control) {
//     // let arr = control.split('');
//     // arr.forEach((e)=>{
//     //     switch(e){
//     //         case "w":
//     //             n+=1;
//     //             break;
//     //         case "s" :
//     //             n-=1;
//     //             break;
//     //         case "d" :
//     //             n+= 10;
//     //             break;
//     //         case "a" :
//     //             n-= 10;
//     //     }
//     // })
    
//     let obj = {
//         w : +1,
//         s : -1,
//         d : +10,
//         a : -10
//     }
//     control.split('').map(e=> n+=obj[e])
//     return n;
// }