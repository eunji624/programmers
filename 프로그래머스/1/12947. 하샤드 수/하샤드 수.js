function solution(x) {
    let xArr = String(x).split("");
    let plus = 0;
    for(let i=0; i< xArr.length; i++){
        plus += Number(xArr[i]);
    }
    return x%plus === 0?  true : false
}