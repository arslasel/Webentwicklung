function findTag(text){
    let regex = /<([a-zA-Z0-9_-]+)>/
    let match = text.match(regex);

    if (match && match.length >= 1) {
        return match[1];
    }
    return undefined;
}

let cache = {};

function fibonacci(n, enableCaching = true){
    if (n < 2) {
        return n;
    }
    if (enableCaching && cache[n]) {
        return cache[n];    
    }
    cache[n] =  fibonacci(n - 1) + fibonacci(n - 2);
    return cache[n];
}

function isObj(obj){
    return obj != null && typeof obj === 'object';
}

const equal = (a, b) => {
    if (a === b) {
        return true;
    }

    if (isObj(a) && isObj(b)) {
        const aKeys = Object.keys(a);
        const bKeys = Object.keys(b);
        const checkA = aKeys.every((val) => bKeys.includes(val) && a[val] === b[val]);
        const checkB = bKeys.every((val) => aKeys.includes(val) && a[val] === b[val]);
        return checkA && checkB;
    }

    return false;
}
module.exports = { findTag, fibonacci, equal };