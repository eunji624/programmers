function solution(name, yearning, photo) {
    
//     let obj = {};
//     name.forEach((e,i)=> obj[e] = yearning[i])
    
//     let answer = photo.map((p)=>{
//         let num = p.map((sp)=>{
//             return obj[sp] ? obj[sp] : 0
//         })
//         let redu = num.reduce((acc, acu)=>{
//            return acc+ acu; 
//         },0);

//     })
//     return answer;
    
//     return photo.map((p) =>{
//         return p.map((sp) =>{
//             return obj[sp] ? obj[sp] : 0
//         }).reduce((acc, acu)=> {
//             return acc+ acu 
//         },0)
//     })


    // let obj = {};
    // for(let i = 0; i < name.length; i++){
    //     obj[name[i]] = yearning[i];
    // }
    // return photo.map(value => value.map(v => obj[v] ? obj[v] : 0).reduce((acc,cur) => acc + cur,0))

    
    
    let mapPhoto = photo.map((p)=>{
        let answer = [];
        return p.map((e)=>{
            return name.map((n)=>{
                return e ===n ? e : ''
            })
        });
        
    })
    
    let val = {};
    for(let i=0; i< name.length; i++){
        val[name[i]] = yearning[i]
    }
    
    let ansans = mapPhoto.map((a)=>{
        let newA = a.reduce((acc,acu)=>{
            return acc + val[acu]
        }, 0)
        return newA
    })
    return ansans
}