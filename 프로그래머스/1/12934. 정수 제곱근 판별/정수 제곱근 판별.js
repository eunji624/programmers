function solution(n) {
    const root = Math.sqrt(n);
    if(root% parseInt(root)){
        return -1
    }else{
        return (root+1)**2
    }
}