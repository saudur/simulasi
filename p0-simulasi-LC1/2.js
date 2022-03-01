let exercise = '<>^v>>>' // Isi value sesuai keinginanmu
let userInput = '<vvvvvv' // Isi value sesuai keinginanmu


// Your code here

if (exercise.length !== userInput.length) {
    console.log("Input yang anda masukkan tidak lengkap!");
} else {
    let poin =0
    let maxScore = exercise.length * 10
    for (let i = 0; i < exercise.length; i++) {
        if (exercise[i] === userInput[i]) {
            poin += 10
        }
    }
    
    let persentase = Math.floor(poin / maxScore * 100)
    let kategori = ''

    if (persentase === 100) {
        kategori = 'Perfect'
    } else if (persentase >= 80 && persentase <= 99) {
        kategori = 'Great'
    } else if (persentase >= 60 && persentase <= 79) {
        kategori = 'Good'
    } else if (persentase <= 59) {
        kategori = 'Bad'
    }
    
    console.log(`Anda Mendapatkan Score ${poin} / ${maxScore} . Persentase: ${persentase}%, Kategori: ${kategori} `);
}