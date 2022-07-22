// alert("js ok");

// - PER OGNI i che va da 0 a 100
for (let i = 0; i < 100; i++) {
    // - SE (i + 1) % 3 AND (i + 1) % 5 === 0 => (i + 1) % 15 === 0
    if (((i + 1) % 15) === 0) {
        // - allora stampa FizzBuzz
        console.log("FizzBuzz")
    } else {
        if (((i + 1) % 3) === 0) {
            console.log("Fizz")
        } else {
            if (((i + 1) % 5) === 0) {
                console.log("Buzz");
            } else {
                console.log(i + 1);
            }
        }
    }
}
// - ALTRIMENTI SE (i + 1) % 3 === 0
// - allora stampa Fizz
// - ALTRIMENTI SE (i + 1) % 5 === 0
// -allora stampa Buzz
// -ALTRIMENTI stampa i + 1