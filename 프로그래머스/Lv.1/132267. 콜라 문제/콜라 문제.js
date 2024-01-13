function solution(a, b, n) {
    let newCola = n;
    let getCola = 0;
    let rest;
    while(n+newCola>a){
        newCola = Math.floor(n/a)*b;
        rest = n%a;
        n=rest+newCola;
        getCola+=newCola;
    }
    return Number(getCola);
}

// 입력값 〉 3, 2, 20
// 기댓값 〉 36