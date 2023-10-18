function solution(name, yearning, photo) {
    let newPhoto = []
    //photo라는 큰 배열을 하나하나 돌리며 작은 배열을 살펴본다 
    let mapPhoto = photo.map((p)=>{
        let answer = [];
        //작은 배열의 요소 하나하나가 name의 요소 하나하나와 같은지 비교한다.  //같은지 비교 ㅔ
        p.map((e)=>{
            name.map((n)=>{
                return e ===n ? answer.push(e) : e
            })
        });
        newPhoto.push(answer)
    })
    console.log(newPhoto)
    
    //obj 만들어서 값 할당.
    let val = {
        
    }
    for(let i=0; i< name.length; i++){
        val[name[i]] = yearning[i]
    }
    console.log(val);
    
    let ansans = newPhoto.map((a)=>{
        let newA = a.reduce((acc,acu)=>{
            return acc + val[acu]
        }, 0)
        return newA
        console.log(newA)
    })
    console.log(ansans)
    return ansans
}