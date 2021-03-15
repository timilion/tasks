// Уловка, которую я изучил в начальной школе, чтобы определить, делится ли число на три, состоит в том, чтобы сложить все целые числа в числе и разделить полученную сумму на три. Если от деления суммы на три нет остатка, то исходное число также делится на три. Учитывая серию цифр в виде строки, определите, делится ли число, представленное строкой, на три. Примечание: Старайтесь избегать использования оператора % (остаток от деления). Число, которое будет принимать в себя функция - всегда будет строка.
// Пример кода:
// divisibleByThree('123') => true
// divisibleByThree('19254') => true
// divisibleByThree('88') => false
// divisibleByThree('1') => false
//1 вариант
// const divisibleByThree = (str) => {
//     const num = Number(str) / 3;
//     return (num ^ 0) === num ? true : false;
// };

const divisibleByThree = (str) => Number(str) % 3 === 0;

console.log(divisibleByThree("123")); // true
console.log(divisibleByThree("19254")); // true
console.log(divisibleByThree("88")); // false
console.log(divisibleByThree("1")); // false
