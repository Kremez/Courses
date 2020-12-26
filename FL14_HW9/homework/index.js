function executeforEach(array, someFunction) {
    for (let i = 0; i < array.length; i++) {
        someFunction(array[i]);
    }
}

executeforEach([1, 2, 3], el => {
    el = el * 2;
    console.log(el);
});


function mapArray(arrayIn, functionIn) {
    const arrayOut = [];
    executeforEach(arrayIn, el => arrayOut.push(functionIn(el)));
    return arrayOut;
}


function filterArray(arrayIn, functionIn) {
    const arrayOut = [];
    executeforEach(arrayIn, el => {
        if (functionIn(el)) {
            arrayOut.push(el);
        }
    });
    return arrayOut;
}


function flipOver(str) {
    return str.split("").reverse().join("");
}

function makeListFromRange(start, len) {
    var arr = new Array(len);
    for (var i = 0; i < len; i++, start++) {
        arr[i] = start;
    }
    return arr;
}