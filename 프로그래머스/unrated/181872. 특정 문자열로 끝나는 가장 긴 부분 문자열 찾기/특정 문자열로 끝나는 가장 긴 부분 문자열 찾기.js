function solution(myString, pat) {
    let a = myString.lastIndexOf(pat);
    let slice = myString.slice(0, a+pat.length);
    return slice 
}