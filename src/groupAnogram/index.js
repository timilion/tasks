//Группировка анограм
const arr = ["abc", "bca", "cab", "tr", "rt", "yes", "no"];
const res = Object.values(
    arr.reduce((acc, item) => {
        const key = item.split("").sort().join("");
        if (!acc[key]) {
            acc[key] = [item];
        } else {
            acc[key].push(item);
        }
        return acc;
    }, {})
);
console.log(res);
// [ [ 'abc', 'bca', 'cab' ], [ 'tr', 'rt' ], [ 'yes' ], [ 'no' ] ]
