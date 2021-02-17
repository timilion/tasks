//Return the average of the given array rounded down to its nearest integer.

function getAverage(marks) {
    //TODO : calculate the downwar rounded average of the marks array
    return Math.floor(marks.reduce((acc, item) => acc + item, 0) / marks.length);
}

console.log(getAverage([2, 2, 2, 2])); //2
console.log(getAverage([1, 2, 3, 4, 5])); //3
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2])); //1
