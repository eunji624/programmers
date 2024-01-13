function solution(array, commands) {
    var answer = [];
    commands.forEach((e)=>{
        const a = e[0]-1;
        const b = e[1];
        const c = e[2]-1;
        const newArr = array.slice(a,b).sort((a,b)=> a-b)
        console.log(newArr)
        answer.push(newArr[c])
    })
    return answer;
}