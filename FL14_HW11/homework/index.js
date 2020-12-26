function isEquals(a, b) {
    return a === b;
}

function numberToString(number) {
    return number.toString();
}

function storeNames() {
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {

        arr.push(arguments[i]);
    }
    return arr;
}

function getDivision(a, b) {
    let result;
    if (a >= b) {
        result = a / b;
    } else {
        result = b / a;
    }
    return result;
}

function negativeCount(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count = count + 1;
        }
    }
    return count;
}

function letterCount(str, sumbol) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === sumbol) {
            count = count + 1;
        }
    }
    return count;
}

function countPoints(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let newArr = arr[i].split(':');
        if (parseInt(newArr[0], 10) > parseInt(newArr[1], 10)) {
            count = count + 3;
        } else if (parseInt(newArr[0], 10) === parseInt(newArr[1], 10)) {
            count = count + 1;
        }
    }
    return count;
}
