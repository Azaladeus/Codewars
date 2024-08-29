//Тут сразу попал в цель, фильтр убирает элементы которые есть в массиве a
function arrayDiff(a, b) {
  return a.filter((el) => !b.includes(el))
}