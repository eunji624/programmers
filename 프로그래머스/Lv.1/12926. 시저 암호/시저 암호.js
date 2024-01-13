function solution(s, n) {
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let abc=  str.toLowerCase()
    let answer= ''
    
    for(let i=0; i<s.length; i++){
        if(s[i]===' ') {
            answer+=" ";
            continue;
        }
        const sameTypeArray = str.indexOf(s[i])+1 ? str : abc;
        let index = sameTypeArray.indexOf(s[i])+n
        index = (sameTypeArray.length> index) ? index : index-= sameTypeArray.length;
        answer+= sameTypeArray[index]
    }    
    return answer
}
