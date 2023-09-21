function solution(rsp){
    // let arr=[...rsp];
    // let a = new Array();
    // arr.forEach((e)=>{
    //     e = Number(e)
    //     if(e===2){a.push(0)}
    //     else if( e===0){a.push(5)}
    //     else if (e === 5){a.push(2)}
    // })
    // return a.join('')
    
    let arr = {
        2 : 0,
        0 : 5,
        5 : 2
    };
    return  [...rsp].map((e)=> arr[e]).join('')

}