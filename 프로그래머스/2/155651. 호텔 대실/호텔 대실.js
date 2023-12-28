// function solution(book_time) {
//     let answer = book_time.length;
//     const sortBook_time2 = book_time.sort((a,b)=> {
//         const newA = a[1].split(":").join("");
//         const newB = b[1].split(":").join("");
//         return newA - newB
//     });
//     let thisAnswer = new Set()
//     sortBook_time2.forEach((e)=>{
//         let element1 = e[1].split(':').join("");
//         let check = Number(element1)+10;

//         sortBook_time2.forEach((a)=> {
//             let element = Number(a[0].split(':').join(""));
//             if(element-check >= 0 ) {
//                 return thisAnswer.add(element)
//             }
//         })
//     })

//     console.log(book_time.length - thisAnswer.size)
// //     for(let i=0; i< sortBook_time.length; i++){
// //         console.log(sortBook_time[i][1]);
// //         console.log(sortBook_time[i+1][0])

// //     }

//     return book_time.length - thisAnswer.size;
// }


 

const hTom = (str) => {
    const [h,m] = str.split(":")
    return +h * 60 + +m
}

function solution(book_time) {
   
    const time = book_time.map(el => [hTom(el[0]) , hTom(el[1])+10])
    time.sort((a,b) => a[0]-b[0])
    
    let ret = 0;
  
    let room = []
    
    for (const [s,e] of time) {
        room = room.filter(el => el[1] >  s )
        room.push([s,e])
        ret = ret > room.length ? ret : room.length
    }
    
    
    return ret;
}