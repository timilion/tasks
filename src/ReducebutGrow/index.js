//Reduce but Grow
const arr = [
    [1, 2, 3],
    [4, 1, 1, 1, 4],
    [2, 2, 2, 2, 2, 2],
];

//1
const grow = (x) => x.reduce((acc, i) => (acc *= i), 1);

//2
const grow2 = (x) => eval(x.join("*"));

arr.forEach((item) => console.log(grow(item)));
