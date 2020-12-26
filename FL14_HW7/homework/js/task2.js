let word = prompt('enteer your word', '');
let wordLength = word.length;
let tmp = wordLength / 2;

word = word.trim();

if (wordLength % 2 === 0 && wordLength !== 0) {
    let x1 = word.split('')[tmp - 1];
    let x2 = word.split('')[tmp];
    if (x1 === x2) {
        alert('“Middle characters are the same');
    } else {
        alert(x1 + x2);
    }
} else if (wordLength % 2 !== 0) {
    let x = word.split('')[tmp - 0.5];
    alert(x);
} else if (wordLength === 0) {
    alert('Invalid value');
}
