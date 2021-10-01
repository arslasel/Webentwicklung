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
fibo(3)
fibo(10)
fibo(5)


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
fiboB(4)
fiboB(10)
fiboB(30)

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
fiboD(4)
fiboD(10)
fiboD(20)

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
fibo5(30)
fibo5(20)
fibo5(10)