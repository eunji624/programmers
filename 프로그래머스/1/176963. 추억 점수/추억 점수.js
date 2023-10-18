function solution(name, yearning, photo) {
    let mapPhoto = photo.map((p)=>{
        let answer = [];
        p.map((e)=>{
            name.map((n)=>{
                return e ===n ? answer.push(e) : e
            })
        });
        return answer
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