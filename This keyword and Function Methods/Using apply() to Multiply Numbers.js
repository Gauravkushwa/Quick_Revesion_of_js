function multiplyNumbers(a, b){
    return a * b;
}

const numbers = [2, 4];

const result = multiplyNumbers.apply(null, numbers);

console.log(result)