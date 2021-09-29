/*
    Aufgabe A
Fn = n=0 == 0
     n=1 == 1
     n>1 == Fn-1 + Fn-2
*/
function fibo(position) {
    if (position < 2) {
        return position;
    } else {
        return fibo(position - 1) + fibo(position - 2)
    }
}



/*
    Aufgabe b
    f(n) = G**n / 5**(1/2)
    G = (1 + 5**(1/2)) / 2
    G Konstante ist der Goldenen Schnitt
*/
function fiboB(position) {
    let g = (1 + Math.sqrt(5)) / 2;
    let result = Math.round(g ** position / Math.sqrt(5));
    console.log("Fibonacci von %d ist %d", position, result);
}


/*
    Aufgabe C
    Zeitmessung mit console.time()
*/
console.time("fibo")
fibo(30)
console.timeEnd("fibo")
console.time("fiboB")
fiboB(30)
console.timeEnd("fiboB")

/**
 * Aufgabe D
 * Fibonacci Iterativ
 */
function fiboD(position) {
    let befor = 0
    let actual = 0
    let next = 1
    console.log(0)
    console.log(1)
    for (let i = 0; i < position + 1; i++) {
        befor = actual + next
        actuel = next
        next = befor
        console.log(actual)
    }
}

/**
 * Aufgabe 5
 * f(n) = (G**n - H**n) / Math.sqrt(5)
 * G = (1 + Math.sqrt(5)) / 2
 * H = (1 - Math.sqrt(5)) / 2
 */
function fibo5(position) {
    let g = (1 + Math.sqrt(5)) / 2
    let h = (1 - Math.sqrt(5)) / 2
    let result = (g ** position - h ** position) / Math.sqrt(5)
    console.log("Fibonacci von %d ist %d", position, result)
}