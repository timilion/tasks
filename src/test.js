function flatten(str) {
    const res = [];

    function* permutation(s) {
        if (s.length < 3) {
            yield s;
            if (s.length == 2) {
                yield s[1] + s[0];
            }
        } else {
            for (let i = 0; i < s.length; i++) {
                let h = s[i];
                for (let t of permutation(s.substr(0, i) + s.substr(i + 1))) yield h + t;
            }
        }
    }

    for (let s of permutation(str)) {
        let num = Number(s);
        if (String(num).length === str.length) {
            res.push(num);
        }
    }
    return res;
}
console.log(flatten("132"));
