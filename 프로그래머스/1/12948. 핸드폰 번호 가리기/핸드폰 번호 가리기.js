function solution(phone) {
    let show = [...phone].splice(-4);
    let star = [...phone].splice(0, phone.length-4)
    return [...star.map((e)=> e="*"), ...show].join("")
}