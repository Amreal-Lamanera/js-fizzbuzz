// alert("js ok");

// STANDARD EX
// - PER OGNI i che va da 0 a 100
// for (let i = 0; i < 100; i++) {
//     // - SE (i + 1) % 3 AND (i + 1) % 5 === 0 => (i + 1) % 15 === 0
//     if (((i + 1) % 15) === 0) {
//         // - allora stampa FizzBuzz
//         console.log("FizzBuzz")
//     } else {
//         // - ALTRIMENTI SE (i + 1) % 3 === 0
//         if (((i + 1) % 3) === 0) {
//             // - allora stampa Fizz
//             console.log("Fizz")
//         } else {
//             // - ALTRIMENTI SE (i + 1) % 5 === 0
//             if (((i + 1) % 5) === 0) {
//                 // -allora stampa Buzz
//                 console.log("Buzz");
//             } else {
//                 // -ALTRIMENTI stampa i + 1
//                 console.log(i + 1);
//             }
//         }
//     }
// }

// BONUS 1 + BONUS 2 EX
const myGrid = document.querySelector('div[class = "my_grid"]');
// console.log(myGrid);

//prova singola
// const myCell = document.createElement('div');
// myCell.classList.add('my_col', 'cell');
// myCell.append('Prova JS')
// console.log(myCell);

// myGrid.append(myCell)

// - PER OGNI i che va da 0 a 100
for (let i = 0; i < 100; i++) {
    const myCell = document.createElement('div');
    myCell.classList.add('my_col', 'cell');

    // - SE (i + 1) % 3 AND (i + 1) % 5 === 0 => (i + 1) % 15 === 0
    if (((i + 1) % 15) === 0) {
        // - allora stampa FizzBuzz
        console.log("FizzBuzz");
        myCell.append('FizzBuzz');
        myCell.classList.add('fizzbuzz');
    } else {
        // - ALTRIMENTI SE (i + 1) % 3 === 0
        if (((i + 1) % 3) === 0) {
            // - allora stampa Fizz
            console.log("Fizz");
            myCell.append('Fizz');
            myCell.classList.add('fizz');
        } else {
            // - ALTRIMENTI SE (i + 1) % 5 === 0
            if (((i + 1) % 5) === 0) {
                // -allora stampa Buzz
                console.log("Buzz");
                myCell.append('Buzz');
                myCell.classList.add('buzz');
            } else {
                // -ALTRIMENTI stampa i + 1
                console.log(i + 1);
                myCell.append(i + 1);
                myCell.classList.add(i + 1);
            }
        }
    }
    myGrid.append(myCell);
}