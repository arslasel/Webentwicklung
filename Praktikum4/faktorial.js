function factorial(count){
    const isBigInt = typeof count === 'bigint'

    if(count < 0){
        throw "Number has to be bigger then 0"
    }

    if(count <= 1){
        return count
    }

    let result = count
    const start = isBigInt ? count - BigInt(1) : count - 1

    for(let i = start; i >= 2; i--){
        result *= i
    }

    return result
}

const numbers = [1, 2, 3, 4, 5]
const bigIntegers = [1n, 2n, 3n, 10n, 50n]

console.log("------------Factorial without Bigint------------")
numbers.forEach(it => console.log(factorial(it)))
console.log("-----------------------END-----------------------")

console.log("---------------Factorial with Bigint-------------")
bigIntegers.forEach(it => console.log(factorial(it)))
console.log("-----------------------END-----------------------")
