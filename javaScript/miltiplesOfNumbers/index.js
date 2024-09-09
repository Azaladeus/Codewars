function solution(number){
  if(number < 3) {
    return 0;
  } else {
    let multiply = 0;
    for(let i = 0; i < number; i++) {
        if(Number(i) % 3 === 0 || Number(i) % 5 === 0) {
            multiply += i;
        }
    }
    return multiply;
  }
}