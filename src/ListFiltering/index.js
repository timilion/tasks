//создадите функцию, которая принимает список неотрицательных целых чисел и строк и возвращает новый список с отфильтрованными строками.
const arr = [1, 2, "aasf", "1", "123", 123];

const filterList = (l) => l.filter(Number.isInteger);
console.log(filterList(arr));
