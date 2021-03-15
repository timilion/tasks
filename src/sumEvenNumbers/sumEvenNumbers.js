// Напишите функцию, которая принимает последовательность чисел как единственный параметр. Ваша функция должна возвращать сумму четных значений этой последовательности.
// Пример кода:
// sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) => 30
// sumEvenNumbers([]) => 0

const sumEvenNumbers = (arr) => {
    return arr.reduce((acc, item) => {
        if (item % 2 === 0) {
            acc += item;
        }
        return acc;
    }, 0);
};

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(sumEvenNumbers([]));
