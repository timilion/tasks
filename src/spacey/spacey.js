// Пример кода:
// spacey(['kevin', 'has','no','space']) => [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']
// spacey(['this','cheese','has','no','holes']) => ['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']

const spacey = (arr) => {
    let str = "";
    return arr.map((item) => ((str += item), str));
};

console.log(spacey(["kevin", "has", "no", "space"]));
console.log(spacey(["this", "cheese", "has", "no", "holes"]));
