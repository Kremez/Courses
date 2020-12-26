let expression = prompt('enteer you expression');
let result;

if (expression.includes('+')) {
    calculate("+")
} else if (expression.includes('-')) {
    calculate("-")
} else if (expression.includes('*')) {
    calculate("*")
} else if (expression.includes('/')) {
    calculate("/")
} else {
    console.log('Not corect expression');
}

function calculate(operation) {
    let array = expression.split(operation);
    console.log(array.length);
    console.log(array);
    if (array.length == 2 && Number(array[0]) && Number(array[1])) {
        result = eval(array[0] + operation + array[1]);
        return result;
    } else {
        console.log('Not corect expression');
    }
}

if (isNaN(result)) {
    console.log('Result is not a number');
}

console.log(result);



