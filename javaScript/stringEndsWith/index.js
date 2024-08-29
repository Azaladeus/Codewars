//Решил ее так (str.slice(-ending.length) === ending || ending == '') ? true : false; Оказывается все можно было сделать проще.
//Функция endsWith и проверяет конец строки.
function solution(str, ending){
    return str.endsWith(ending);
}