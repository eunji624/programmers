function solution(my_string) {
    let arr = [...my_string]
    let s = [...new Set(arr)]
    return s.toString().replaceAll(',', '')
}