let age = 11
let height = 140
let tarif = 0

if (age <= 1) {
    console.log('Dilarang masuk');
} else if (age >= 2 && age <= 3) {
    tarif += 30000
    if (height > 70) {
        tarif += 10000
    }
    console.log(tarif);
} else if (age >= 4 && age <= 7) {
    tarif += 40000
    if (height > 150) {
        tarif += 15000
    }
    console.log(tarif);
} else if (age >= 8 && age <= 10) {
    tarif += 50000
    if (height > 150) {
        tarif += 20000
    }
    console.log(tarif);
} else {
    console.log(80000);
}


// if (age <= 1){
//     console.log('Dilarang masuk');
// }else if(age >= 2 && age <= 3) {
//     if (height > 70) {
//         console.log(40000);
//     } else {
//         console.log(30000);
//     }
// }else if (age >= 4 && age <= 7) {
//     if (height > 120) {
//         console.log(55000);
//     } else {
//         console.log(40000);
//     }
// }else if (age >= 8 && age <= 10) {
//     if (height > 150) {
//         console.log(60000);
//     } else {
//         console.log(50000);
//     }
// } else {
//     console.log(80000);
// }