function solution(price, money, count) {
    let totalPrice = 0;
    while(count > 0){
        totalPrice += price*count
        count--;
    }
    console.log(totalPrice-money)

    return totalPrice-money <= 0 ? 0 : totalPrice-money;
}