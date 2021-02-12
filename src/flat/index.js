// из многомерного в одинарный

const arr = [1, [1, 2, null], [1, [Function, ["str", [undefined, null, 0]]]], [() => {}, "string"]];
const res = arr.flat(Infinity);
console.log(res);
