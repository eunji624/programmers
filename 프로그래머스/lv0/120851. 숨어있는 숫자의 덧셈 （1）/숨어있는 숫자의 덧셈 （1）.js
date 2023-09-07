  function solution(my_string) {
    let a = [...my_string];
    var answer = 0;
    a.forEach(function(e){
      if(parseInt(e)>0){
        answer = answer+parseInt(e)
      }
    })
    return answer;
  }