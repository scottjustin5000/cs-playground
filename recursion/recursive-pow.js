/*
* examples....
*/

function isEven(n) {
    return n % 2 === 0;
}

function isOdd(n) {
    return !isEven(n);
}

function power (x, n) {
    if(n === 0) {
        return 1;
    }
    if(n < 0) {
        return 1 / (power(x, Math.abs(n))); //Make sure it's float AND abs
    }
    else if(isEven(n)) {
       return x * power(x, n/2); 
    }
    return x * power(x, n-1);
}


module.exports = {
    power: power
}