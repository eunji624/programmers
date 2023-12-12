function solution(food) {
    //food의 1번째 요소부터 쭉 순회하면서 /2의 정수부분만 가져오기
    //가져온 정수 번 만큼 answer에 food배열의 인덱스값 넣기
    //다 하면 그 answer에 리버스 값을 변수에 담아두고,
    //answer에 0을 추가 
    //아까 담은 리버스 값과 합치기.
    
    let answer= ""
    food.forEach((e, i)=>{
        if(i!==0){
            let n = Math.floor(e/2);
            while(n>0){
                answer+=i
                n--
                console.log(n)
            }   
           
        }
    })
    let reverse = answer.split('').reverse().join('')
    console.log(reverse)
    return answer+'0'+reverse
}