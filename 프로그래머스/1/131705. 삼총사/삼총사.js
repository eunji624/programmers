function solution(number) {
    var answer = 0;
    number.forEach((a, ai)=>{
        number.forEach((b,  bi)=>{
            number.forEach((c, ci)=>{
                if(ai !== bi && bi!== ci && ai!== ci && a+b+c === 0){
                    answer++
                }
            })
        })
    })
    return answer/6;
}