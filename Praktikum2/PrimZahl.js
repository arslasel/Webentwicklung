function isPrime(zahl) {
    let startZahl = zahl - 1;
    while (startZahl > 1) {
        if ((zahl % startZahl) == 0) {
            return false;
        }
        startZahl--;
    }
    return true;
}

isPrime(3)
isPrime(10)
isPrime(155)