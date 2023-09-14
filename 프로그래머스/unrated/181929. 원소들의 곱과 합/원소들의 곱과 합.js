function solution(num_list) {
    // let g =1;
    // let p =0;
    // num_list.forEach((e)=>{
    //     g= g*e;
    //     p= p+e;
    // })
    // return g<(p*p)? 1 : 0;

    let mul = num_list.reduce((a, c) => {return a*c ;}, 1);
    let sum = num_list.reduce((a, c) => {return a+c ;}, 0);
    return (mul < sum*sum) ? 1 : 0;
}