// отсортировать массив нечетных чисел в порядке возрастания, но сохранить четные числа в их положении
const arr = [1, 2, 4, 5, 78, 4, 9, 99, 22, 53, 555];
const arrSort = arr.filter((value) => value % 2).sort((a, b) => a - b);
const result = arr.map((item) => (item % 2 ? arrSort.shift() : item));
console.log(result);
// [1, 2,  4,  5, 78, 4, 9, 53, 22, 99, 555]
