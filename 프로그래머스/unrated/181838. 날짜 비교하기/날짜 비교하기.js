function solution(date1, date2) {
    // let answer;
    // date1.forEach((e)=> {
    //     date2.forEach((i)=>{
    //         e<i?  answer= 1 : answer= 0
    //     })
    // })
    
        let one = Number(date1.toString().replaceAll(',', ''))
        let two = Number(date2.toString().replaceAll(',', ''))
        if((one - two) < 0){
            return 1
        }else {return 0}
 
}