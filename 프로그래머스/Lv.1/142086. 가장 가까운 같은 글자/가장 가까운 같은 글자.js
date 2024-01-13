function solution(s) {
    let haveAlpa = [];
    let haveAlpaNum= [];
    let answer = [];
    s.split('').forEach((e, i)=>{
        if(!haveAlpa.includes(e)){
            haveAlpa.push(e);
            haveAlpaNum.push(e+'-'+i);
            answer.push(-1)
        }else{
            haveAlpaNum.forEach((f, newI)=> {
                let [element, index ]= f.split('-');
                if(element === e){
                    answer.push(i-index)
                    haveAlpaNum[newI] = e+'-'+i
                }
            });
        }
    })
    return answer;
}