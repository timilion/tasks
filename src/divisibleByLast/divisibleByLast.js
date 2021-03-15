// Возьмите число и проверьте, делится ли оно на цифру слева от него, и верните массив логических значений. Логические значения всегда должны начинаться с false, потому что перед первой цифрой нет цифр.
// Пример кода:
// divisibleByLast(73312) => [false, false, true, false, true]
// divisibleByLast(2026) => [false, true, false, true]
// divisibleByLast(635) => [false, false, false]
// divisibleByLast(1337) => [false, true, true, false]

const divisibleByLast = (num) => {
    return String(num)
        .split("")
        .map((item, index, arr) => (item % arr[index - 1] === 0 ? true : false));
};

console.log(divisibleByLast(73312)); //[ false, false, true, false, true ]
console.log(divisibleByLast(2026)); //[ false, true, false, true ]
console.log(divisibleByLast(635)); //[ false, false, false ]
console.log(divisibleByLast(1337)); //[ false, true, true, false ]
