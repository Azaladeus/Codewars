//Тут все довольно просто, число в строку -> потом в массив -> сортируем -> крутим -> возвращаем к числу.
function descendingOrder(n){
    return Number(n.toString().split('')
        .sort()
        .reverse()
        .join(''));
}