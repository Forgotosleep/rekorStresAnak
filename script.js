// //TEST
// const fs = require('fs');
// fs()


// const fs = require('fs')
// let data = fs.readFile('./data.json', (err, data) => {
//     console.log('test');
// })  //WORKS!


// let kucing = {kaki: 4, ekor: 1, dubur:2}
// let written = JSON.stringify(kucing)

// fs.writeFile('./data.json', written, 'utf8', (err) => {
//     if (err) {
//         console.log('fail to write');
//     }
//     else {
//         console.log('write success');
//     }
// })

// console.log(data);

// let namaOrtu = ""
// let namaAnak = ""

//data.json
// [
//     {
//         "namaOrtu": "admin",
//         "namaAnak": "admin123" 
//     },
//     {
//         "namaOrtu": "mbahmu",
//         "namaAnak": "nakmu",
//         "stressLvl":[1, 2, 3, 4, 5]
//     }
// ]

// const regLogin = (namaOrtu, namaAnak) => {
//     // let data 
//     // let counter = data.length
//     for (let i = 0; i < data.length; i++) {
//         if (!data[i].namaOrtu && !data[i].namaAnak) {
//             data.push({namaOrtu: namaOrtu, namaAnak: namaAnak})
//         }
        
//     }
//     return data
// }

//Since we're using Local Storage, highly unlikely that there's two different parents with the same name, so instead the child name will be saved inside as a property, so the same parent can enter multiple child
const login = (namaOrtu, namaAnak) => {
    if (!localStorage.getItem(`${namaOrtu}`)) {  
        localStorage.setItem(`${namaOrtu}`, childFactory(namaAnak))
        console.log(localStorage.getItem(`${namaOrtu}`));
        console.log('Registration Successful!');
    }
    else {
        console.log('Login Success!');
        return true 
    }
}

const childFactory = (namaAnak) => {
    return {
        namaAnak: [namaAnak]  //properti pertama selalu adalah nama dari anak berupa string
    }
}

let submitButton = document.querySelector('#submit-button')

submit