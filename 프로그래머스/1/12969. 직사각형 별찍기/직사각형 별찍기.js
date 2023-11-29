process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const [n, m] = data.split(" ");
    let answer='*'.repeat(n);
    for(let i=0; i< m; i++){
        console.log(answer)
    }    
    // const a = Number(n[0]), b = Number(n[1]);
    // console.log(a);
    // console.log(m);
});