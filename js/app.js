// alert("js ok");

// - PER OGNI i che va da 0 a 100
for (let i = 0; i < 100; i++) {
    // - SE (i + 1) % 3 AND (i + 1) % 5 === 0 => (i + 1) % 15 === 0
    if (((i + 1) % 15) === 0) {
        // - allora stampa FizzBuzz
        console.log("FizzBuzz")
    } else {
        // - ALTRIMENTI SE (i + 1) % 3 === 0
        if (((i + 1) % 3) === 0) {
            // - allora stampa Fizz
            console.log("Fizz")
        } else {
            // - ALTRIMENTI SE (i + 1) % 5 === 0
            if (((i + 1) % 5) === 0) {
                // -allora stampa Buzz
                console.log("Buzz");
            } else {
                // -ALTRIMENTI stampa i + 1
                console.log(i + 1);
            }
        }
    }
}