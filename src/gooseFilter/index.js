//gooseFilter

const arr = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"];
function gooseFilter(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    // return an array containing all of the strings in the input array except those that match strings in geese
    return birds.filter((v) => !geese.includes(v));
}

console.log(gooseFilter(arr)); //["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
