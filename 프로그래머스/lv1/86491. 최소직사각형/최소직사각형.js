function solution(sizes) {
    function bigsmall(arr){
        arr.sort((a,b)=> {return b-a});
    }
    let frist = [];
        second = []
    sizes.map((a)=>{
        bigsmall(a)
        frist.push(a[0]);
        second.push(a[1]);
    })
    bigsmall(frist);
    bigsmall(second);

    var answer = frist[0] * second[0];
    return answer;
}
