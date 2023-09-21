function solution(rsp){
    let a = '';
    [...rsp].map((e)=>{
        a+= e==='2' ?e ='0' : e==='0' ? e='5' : e='2';
    }).join('')
    return a
    
    // let a = '';
    // [...rsp].map((e)=>{
    //     e === '2' ? a += '0' : e === '0' ? a += '5' : a += '2';
    // });
    // return a;

    // let arr = {
    //     2 : 0,
    //     0 : 5,
    //     5 : 2
    // };
    // return  [...rsp].map((e)=> arr[e]).join('')

}