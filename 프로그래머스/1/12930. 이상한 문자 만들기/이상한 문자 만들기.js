function solution(s) {
    let splitArr = s.split(' ');
    let newSplitArr=[]
    for(let i=0; i<splitArr.length; i++){
        splitArr[i].split('').map((e,i)=>{
            if(i%2===0 ){
                return newSplitArr.push(e.toUpperCase())
            }else{
                return newSplitArr.push(e.toLowerCase())
            }
        })
        if(i !== splitArr.length-1){
            newSplitArr.push(' ')
        } 
    }
    return newSplitArr.join('')
}