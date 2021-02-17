//Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.

function gordon(a) {
    return a
        .toUpperCase()
        .replace(/\w+/g, "$&!!!!")
        .replace(/[AEIOU]/g, (v) => (v == "A" ? "@" : "*"));
}

console.log(gordon("What feck damn cake")); //'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!'
