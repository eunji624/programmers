function solution(num_list, n) {
    // return num_list.splice(0,n);
    return num_list.filter((e, i) => i < n)

}