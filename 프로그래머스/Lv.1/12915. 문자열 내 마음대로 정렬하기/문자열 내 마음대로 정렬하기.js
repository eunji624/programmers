function solution(str, n) {
    //str 에서 글자를 먼저 정렬해주고, 새로 정렬된 애를 n번째 글자의 크기대로 비교
    let sortStr = str.sort()
    sortStr.sort(function(a,b){
        if(a[n] > b[n]){ return 1}
        else if(a[n] < b[n]){ return -1}
        
    })
    return sortStr
}