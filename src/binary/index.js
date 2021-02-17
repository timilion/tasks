const now = require("performance-now");

let start = 0,
    end = 0;

const search = 99000000;

start = now();
const arr = [...Array(100000000)].map((_, i) => i + 1);

end = now();
console.log("Массив создавался", (end - start).toFixed(3));

start = now();

console.log(arr.find((v) => v === search));

end = now();
console.log("Время выполнения find = ", (end - start).toFixed(3));

start = now();

console.log(arr[arr.indexOf(search)]);

end = now();

console.log("Время выполнения indexOf = ", (end - start).toFixed(3));

start = now();

const binary = (arr, target) => {
    let start = 0;
    let end = arr.length;
    let pivot = Math.floor((start + end) / 2);
    let steps = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[pivot] !== target) {
            if (target < arr[pivot]) end = pivot;
            else start = pivot;
            pivot = Math.floor((start + end) / 2);
            steps++;
        }

        if (arr[pivot] === target) return `Found: ${target} in ${steps} steps`;
    }

    return "Nothing Found";
};

console.log(binary(arr, search));

end = now();
console.log("Время выполнения binary = ", (end - start).toFixed(3));
