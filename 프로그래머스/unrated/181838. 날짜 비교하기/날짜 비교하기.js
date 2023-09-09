function solution(date1, date2) {
    let one = Number(date1.toString().replaceAll(',', ''))
    let two = Number(date2.toString().replaceAll(',', ''))
    if((one - two) < 0){
        return 1
    }else {return 0}
}
