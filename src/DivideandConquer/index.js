//Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.
const arr = [9, 3, "7", "3"];

function divCon(x) {
    return x.reduce((acc, item) => {
        acc = typeof item === "number" ? acc + item : acc - item;
        return acc;
    }, 0);
}

const divCon2 = (x) => x.reduce((acc, i) => (0 + i === i ? acc + i : acc - i), 0);

console.log(divCon([9, 3, "7", "3"])); // 2
console.log(divCon2(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"])); // 13
